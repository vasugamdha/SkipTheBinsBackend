const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skipthebins@gmail.com',
        pass: 'skipthebins@123'
    }
});