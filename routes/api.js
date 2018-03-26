const express = require("express");
const queries = require("../queries");
const router = express.Router();
const scraper = require("../webscrpr");
const mailer = require('../mailer')
require('dotenv').config()

module.exports = router;

router.get("/", (request, response, next) => {
  queries.list("groups")
    .then(groups =>
      queries.list("users").then(users => queries.list("airbnb")
        .then(airbnb => queries.list("dates").then(dates => response.json({
          groups: groups,
          users: users,
          airbnb: airbnb,
          dates:dates
        })
        ))))
    .catch(next);
});

// router.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

router.get("/groups", (request, response, next) => {
  queries.list("groups")
    .then(groups => {
      response.json({ groups });
    })
    .catch(next);
});

router.get("/airbnb", (request, response, next) => {
  queries.list("airbnb")
    .then(airbnb => {
      response.json({ airbnb });
    })
    .catch(next);
});

router.get("/users", (request, response, next) => {
  queries.list("users")
    .then(users => {
      response.json({ users });
    })
    .catch(next);
});

router.get("/buttons", (request, response, next) => {
  queries.list("buttons")
    .then(buttons => {
      response.json({ buttons });
    })
    .catch(next);
});

router.get("/bnbbuttons", (request, response, next) => {
  queries.list("bnbbuttons")
    .then(bnbbuttons => {
      response.json({ bnbbuttons });
    })
    .catch(next);
});

router.get("/activitiesbuttons", (request, response, next) => {
  queries.list("activitiesbuttons")
    .then(activitiesbuttons => {
      response.json({ activitiesbuttons });
    })
    .catch(next);
});

router.get("/search/:url", (request, response, next) => {
  scraper.searchAir(request.params.url)
    .then(listings => {
      response.json(listings);
    });
});

router.get("/groups/:id", (request, response, next) => {
  queries.read(request.params.id).then(group => {
    group
      ? response.json({group})
      : response.sendStatus(404);
  })
    .catch(next);
});

router.get("/users/:id", (request, response, next) => {
  queries.read(request.params.id).then(user => {
    user
      ? response.json({user})
      : response.sendStatus(404);
  })
    .catch(next);
});

router.post("/groups", (request, response, next) => {
  queries.create("groups", request.body).then(groups => {
    response.status(201).json({groups});
  })
    .catch(next);
});

router.post("/airbnb", (request, response, next) => {
  queries.create("airbnb", request.body).then(bnb => {
    response.status(201).json({bnb});
  })
    .catch(next);
});

router.post("/users", (request, response, next) => {
  queries.create("users", request.body).then(users => {
    response.status(201).json({users});
  })
    .catch(next);
});

router.post("/dates", (request, response, next) => {
  queries.create("dates", request.body).then(dates => {
    response.status(201).json({dates});
  })
    .catch(next);
});

router.post("/buttons", (request, response, next) => {
  queries.create("buttons", request.body).then(buttons => {
    response.status(201).json({buttons});
  })
    .catch(next);
});

router.post("/bnbbuttons", (request, response, next) => {
  queries.create("bnbbuttons", request.body).then(bnbbuttons => {
    response.status(201).json({bnbbuttons});
  })
    .catch(next);
});

router.post("/activitiesbuttons", (request, response, next) => {
  queries.create("activitiesbuttons", request.body).then(activitiesbuttons => {
    response.status(201).json({activitiesbuttons});
  })
    .catch(next);
});

router.put("/groups/:id", (request, response, next) => {
  queries.update("groups", request.params.id, request.body).then(group => {
    response.json({group});
  })
    .catch(next);
});

router.post("/send", (req, res) => {
  const message = {
    from: process.env.FROM_EMAIL,
    to: req.body.email,
    subject: `Your trip: ${req.body.groupName}`,
    text: `Hello from TravelSquad! You have been invited to weigh in on decisions for your upcoming trip, with the group ${req.body.groupName}. Go to this url to see and submit ideas for dates, lodging, and activities.\n${req.body.url}`
  };

  mailer
    .sendMessage(message)
    .then(()=> {
      res.json({
        message: message
      });
    }).catch(error => {
      res.status(500);
      res.json({
        error: error
      });
    });
});
