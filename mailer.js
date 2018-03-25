const nodemailer = require("nodemailer");

require("dotenv").config();

let smtpConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD
  }
};

let transporter = nodemailer.createTransport(smtpConfig);

module.exports = {
  sendMessage(message) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, success) => {
        if(error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    });
  }
};
