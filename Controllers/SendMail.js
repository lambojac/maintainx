const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  // Create Email Transporter
    const host = process.env.EMAIL_HOST
    const user = process.env.EMAIL_USER
    const service= process.env.Email_Service
    const pass = process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
        service,
        host,
        port: 587,
        secure: false, 
    auth: {
      user, 
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
  });

  // Option for sending email
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log('Error sending message', err);
    } else {
      console.log('Email sent', info);
    }
  });
};

module.exports = sendEmail;