const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skipthebins@gmail.com",
    pass: "skipthebins@123",
  },
});

module.exports = transporter;
