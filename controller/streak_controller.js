const Streak = require("../model/streak_model.js");

exports.showIndex = (req, res, next) => {
  res.send("happy packed lunches");
};

exports.create = (req, res, next) => {
  const user = req.body.user;
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
  const user = req.body.user;
  Streak.findOne({ user })
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
