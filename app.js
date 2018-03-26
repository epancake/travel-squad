const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mailer = require('./mailer')
require('dotenv').config()

const api = require('./routes/api');

app.use(morgan("dev"));
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
app.use(express.static("./client/build"));

app.get('/', function(req, res){
  res.sendFile('./client/public/index.html');
});

app.use((request, response) => {
  response.sendStatus(404);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack =  err.stack;
  res.status(500).send({error: err.message, stack, url: req.originalUrl});
}

module.exports = app;
