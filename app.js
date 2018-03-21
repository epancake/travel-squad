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

app.get("/groups", (request, response) => {
  queries.list("groups")
  .then(groups => {
    response.json({ groups });
  })
  .catch(err => response.status(500).send({message: err.message}))
});

app.get("/users", (request, response) => {
  queries.list("users")
  .then(users => {
    response.json({ users });
  })
  .catch(err => response.status(500).send({message: err.message}))
});

app.get("/groups/:id", (request, response) => {
    queries.read(request.params.id).then(group => {
        group
            ? response.json({group})
            : response.sendStatus(404)
    })
    .catch(err => response.status(500).send({message: err.message}))
});

app.get("/users/:id", (request, response) => {
    queries.read(request.params.id).then(user => {
        user
            ? response.json({user})
            : response.sendStatus(404)
    })
    .catch(err => response.status(500).send({message: err.message}))
});

app.post("/groups", (request, response) => {
    queries.create("groups", request.body).then(groups => {
        response.status(201).json({groups});
    })
    .catch(err => response.status(500).send({message: err.message}))
});

app.post("/users", (request, response) => {
    queries.create("users", request.body).then(users => {
        response.status(201).json({users});
    })
    .catch(err => response.status(500).send({message: err.message}))
});

app.put("/groups/:id", (request, response) => {
    queries.update('groups', request.params.id, request.body).then(group => {
        response.json({group});
    })
    .catch(err => response.status(500).send({message: err.message}))
});

app.use((request, response) => {
    response.sendStatus(404);
});

module.exports = app;
