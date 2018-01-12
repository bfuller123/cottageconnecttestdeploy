var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cottageconnect001@gmail.com',
    pass: 'tester01'
  }
});


//  example for more than one address

// var mailOptions = {
//   from: 'cottageconnect001@gmail.com',
//   to: 'durinthalas@yahoo.com, a.conradharrison@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };


//  example for email containing HTML

// var mailOptions = {
//   from: 'cottageconnect001@gmail.com',
//   to: 'durinthalas@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// }



module.exports = {
  sendMail: function(emailTo, emailFrom, emailSubject, emailBody){
    var mailOptions = {
      from: 'cottageconnect001@gmail.com',
      to: emailTo,
      subject: emailSubject,
      text: `${emailBody} Please reach back out to me at ${emailFrom}`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }
};
