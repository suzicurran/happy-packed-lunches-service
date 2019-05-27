const Streak = require('../model/streak_model.js');

exports.showIndex = (req, res, next) => {
    res.send('hi from <del>steak</del> streak controller');
}

exports.create = (req, res, next) => {
    const streak = new Streak({
         user: req.body.user
    });
    streak.save().then(() => {
         res.send('streak added successfully');
    }).catch(err => {
         res.status(400).send(err);
    })
};