const User = require("../model/user_model.js");

const retrieveUserByName = username => {
  return User.findOne({ username });
};

exports.showIndex = (req, res, next) => {  
  res.send("happy packed lunches are go");
};

exports.streak = (req, res, next) => {
  retrieveUserByName(req.body.username)
    .then(user => {
      res.send({ streak: user.streak });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.create = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user
    .save()
    .then(() => {
      res.send("User added successfully");
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.increment = (req, res, next) => {
  retrieveUserByName(req.body.username)
    .then(user => {
      user.incrementStreak();
      user
        .save()
        .then(() => {
          res.send(
            `Streak updated to ${user.streak} for ${user.username}`
          );
        })
        .catch(err => {
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.reset = (req, res, next) => {
  retrieveUserByName(req.body.username)
    .then(user => {
      user.resetStreak();
      user
        .save()
        .then(() => {
          res.send(`Streak reset to ${user.streak} for ${user.username}`);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
