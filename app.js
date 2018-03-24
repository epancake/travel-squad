const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http").Server(app);
// const io = require("socket.io")(http);

const api = require('./routes/api');

app.use(morgan("dev"));
app.use(cors({origin: true}));
app.use(bodyParser.json());

app.use("/api", api);
app.use(express.static("./client/build"));

// io.on("connection", function(socket){
//   console.log("a user connected");
// });
//
// io.on("connection", function(socket){
//   console.log("a user connected");
//   socket.on("disconnect", function(){
//     console.log("user disconnected");
//   });
// });
//
// io.on("connection", function(socket){
//   socket.on("chat message", function(msg){
//     console.log("message: " + msg);
//   });
// });



app.use((request, response) => {
  response.sendStatus(404);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack =  devMode ? err.stack : undefined;
  res.status(500).send({error: err.message, stack, url: req.originalUrl});
}

module.exports = app;
