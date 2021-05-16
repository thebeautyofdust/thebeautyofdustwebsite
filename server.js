
var path = require('path');
var express = require('express');
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

// cors
app.use(cors({ origin: "*" }));

app.use("/public", express.static(process.cwd() + "/public")); //make public static

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.s,
    pass: process.env.PASS,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    console.log(data);
    const mail = {
      sender: `${data.name} <${data.email}>`,
      to: process.env.EMAIL, // receiver email,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

/*************************************************/
// Express server listening...
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});