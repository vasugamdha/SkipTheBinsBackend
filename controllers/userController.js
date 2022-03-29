const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

import { transporter } from '../mailer/transporter.js'

import User from '../models/userModel.js';

export const verifyAccount = async (req, res) => {
    const { verificationCode } = req.params;
    try {
        const userExists = await User.findOne({ verificationCode })
        if (!userExists) return res.status(404).send({ message: "User doesn't exist." });
        userExists.isVerified = true;
        await userExists.save();
        res.status(200).json({ message: "Account Verified." })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (!userExists) return res.status(404).json({ message: "User doesn't exist." });

        if (userExists.role === 'vendor' && !userExists.isApprovedByAdminIfVendorRole) return res.status(404).json({ message: "Your Vendor Id is not yet verified by Admin." })

        if (!userExists.isVerified) return res.status(400).json({ message: "Account is not verified." })

        const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: userExists.email, id: userExists._id }, 'Group14', { expiresIn: "24h" });

        res.status(200).json({ result: userExists, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword, address, mobileNumber, imageBase64, gender, role, organizationName, reason } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) return res.status(400).json({ message: "User already exist." });

        if (password !== confirmPassword) res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const isApprovedByAdminIfVendorRole = role === 'vendor' ? false : true
        const token = jwt.sign({ email }, 'Group14');
        const result = await User.create({ email, password: hashedPassword, firstName, lastName, address, mobileNumber, imageBase64, gender, role, isApprovedByAdminIfVendorRole, organizationName, reason, verificationCode: token })


        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: 'STB Account Verification',
            html: `<div>Your account has been registered with us. Please click on the below link to verify your email. <a href=${process.env.APP_URL}/user/verify/${token}> Click here to verify </a>
            <p>${role === 'vendor' ? 'Your vendor account creation request has also been sent successfully. Please wait for admin approval.' : ''}<p></div>
                    `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({ message: "Account registered successfully" });
            }
        });

        res.status(200).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}


export const editProfile = async (req, res) => {
    const { id: _id } = req.params;
    const newDetails = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

        const updatedUserDetails = await User.findByIdAndUpdate(_id, { ...newDetails, _id }, { new: true });

        res.json({ result: updatedUserDetails });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const changePassword = async (req, res) => {
    const { id: _id } = req.params;
    const { email, currentPassword, newPassword } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (!userExists) return res.status(400).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(currentPassword, userExists.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Current password is incorrect." });

        const isNewSameAsCurrent = await bcrypt.compare(newPassword, userExists.password);

        if (isNewSameAsCurrent) return res.status(400).json({ message: "New password is same as current password." });

        const newHashedPassword = await bcrypt.hash(newPassword, 12);

        const updatedUserDetails = await User.findByIdAndUpdate(_id, { password: newHashedPassword, _id }, { new: true });

        res.json({ result: updatedUserDetails });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const deleteProfile = async (req, res) => {
    const { id: _id} = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

        await User.findByIdAndDelete(_id);

        res.json({ message: 'Profile deleted successfully.' });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}