const express = require('express');
const userController = require('../controller/user_controller');
const router = express.Router();
const path = require('path');

router.get('/', userController.showIndex);

const testAuthFile = path.resolve('./test-auth.html');
router.get('/login', (req, res) => res.sendFile(testAuthFile));
router.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
router.get('/error', (req, res) => res.send("error logging in"));

// Streak (soon: User?)
router.get('/streak', userController.streak);
router.post('/create', userController.create);
router.patch('/increment', userController.increment);
router.patch('/reset', userController.reset);

module.exports = router;