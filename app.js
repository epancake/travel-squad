const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require("cors");

app.use(morgan('dev'))
app.use(cors({origin: true}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
    queries.list("groups")
      .then(groups =>
        queries.list("users").then(users =>
        response.json({
          groups: groups,
          users: users,
        })
      ))
    .catch(err => response.status(500).send({message: err.message}));
});

module.exports = app;
