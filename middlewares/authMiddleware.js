const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(req.headers)
        let decodedData = jwt.verify(token, 'Group14');
        // req.userId = decodedData?.id;
        if ( decodedData?.id ) {
            const userExists = await User.findOne({ _id : decodedData?.id });
            if (!userExists) return res.status(401).json({ message: "Unauthorized id"});
            next();
        } else{
            return res.status(401).json({ message: "Unauthorized id"});
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ status: 400, message: "Id must be present" })
    }
}

export default auth;