// @author : Vasu Gamdha (Group 14)

const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      // console.log(req.headers)
      let decodedData = jwt.verify(token, "Group14");
      // req.userId = decodedData?.id;
      if (decodedData?.id) {
        const userExists = await User.findOne({ _id: decodedData?.id });
        if (!userExists)
          return res.status(401).json({ message: "Unauthorized ID" });
        next();
      } else {
        return res.status(401).json({ message: "Unauthorized ID" });
      }
    } else {
      return res.status(401).json({ message: "Invalid Access Token" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ status: 401, message: "Invalid Access Token" });
  }
};

module.exports = auth;
