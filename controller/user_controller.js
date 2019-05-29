const User = require("../model/user_model.js");

exports.showIndex = (req, res, next) => {
  res.send("happy packed lunches are go");
};

exports.streak = (req, res, next) => {
  res.send(`Your streak: ${req.user.streak}`);
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
  req.user.incrementStreak();
  req.user
    .save()
    .then(() => {
      res.send(`Streak updated to ${req.user.streak} for ${req.user.username}`);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.reset = (req, res, next) => {
  req.user.resetStreak();
  req.user
    .save()
    .then(() => {
      res.send(`Streak reset to ${req.user.streak} for ${req.user.username}`);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
