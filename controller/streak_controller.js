const Streak = require("../model/streak_model.js");

const retrieveUserByName = username => {
  return Streak.findOne({ user: username });
};

exports.showIndex = (req, res, next) => {
  res.send("happy packed lunches are go");
};

exports.view = (req, res, next) => {
  retrieveUserByName(req.body.user)
    .then(streak => {
      res.send({ streak: streak.streakCount });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.create = (req, res, next) => {
  const user = retrieveUserByName(req.body.user);
  const streak = new Streak({
    user
  });
  streak
    .save()
    .then(() => {
      res.send("streak added successfully");
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.increment = (req, res, next) => {
  retrieveUserByName(req.body.user)
    .then(streak => {
      streak.incrementStreak();
      streak
        .save()
        .then(() => {
          res.send(
            `Streak updated to ${streak.streakCount} for ${streak.user}`
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
  retrieveUserByName(req.body.user)
    .then(streak => {
      streak.resetStreak();
      streak
        .save()
        .then(() => {
          res.send(`Streak reset to ${streak.streakCount} for ${streak.user}`);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
