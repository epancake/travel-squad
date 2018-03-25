const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mailer = require('./mailer')
require('dotenv').config()

var http = require('http').Server(app);
var io = require('socket.io')(http);

const api = require('./routes/api');


app.use(morgan("dev"));
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
app.use(express.static("./client/build"));

io.on("connection", function(socket){
  console.log("a user connected");
});

app.get('/', function(req, res){
  res.sendFile('./client/public/index.html');
});

io.on("connection", function(socket){
  console.log("a user connected");
  socket.on("disconnect", function(){
    console.log("user disconnected");
  });
});

io.on("connection", function(socket){
  socket.on("chat message", function(msg){
    console.log("message: " + msg);
  });
});

app.use((request, response) => {
  response.sendStatus(404);
});

app.use(errorHandler);

app.post("/send", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Invitation to vacation",
    text: `From: ${req.body.email}\n Sent: ${new Date()} \nMessage:\n${req.body.message}`
  };

  mailer
    .sendMessage(message)
    .then(()=> {
      res.json({
        message: "Email sent."
      });
    }).catch(error => {
      res.status(500);
      res.json({
        error: "big error"
      });
    });
});

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack =  devMode ? err.stack : undefined;
  res.status(500).send({error: err.message, stack, url: req.originalUrl});
}

module.exports = app;
