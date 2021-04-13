const express = require('express')
const babyTrackerRouter = express.Router()

babyTrackerRouter.get('/:babyTracker', babyTrackerController.search)
babyTrackerRouter.post('/:babyTrackerId/:userId', babyTrackerController.save)

module.exports = babyTrackerRouter;
