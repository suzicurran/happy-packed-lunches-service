const express = require('express');
const streakController = require('../controller/streak_controller');
const router = express.Router();

router.get('/', streakController.showIndex);

// Streak (soon: User?)
router.get('/view', streakController.view);
router.post('/create', streakController.create);
router.patch('/increment', streakController.increment);
router.patch('/reset', streakController.reset);

module.exports = router;