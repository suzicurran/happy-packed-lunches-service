const express = require('express');
const streakController = require('../controller/streak_controller');
const router = express.Router();

router.get('/', streakController.showIndex);
router.post('/create', streakController.create);
router.patch('/increment', streakController.increment);

module.exports = router;