var path = require('path');
var express = require('express');
var app = express();
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.get("/shesaid", (req, res) => {
  res.status(301).redirect("/#/piece/shesaid")
})

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };
    console.log('send it here', mailOptions)

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later 2'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later 1'
    });
  }
});

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

