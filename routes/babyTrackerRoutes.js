const models = require ('../models')
const express = require('express')
const babyTrackerRoutes = express.Router()



babyTrackerRoutes.post('/search/:babyTracker', async (req, res) => {
    try{
        const babyTracker = await models.babyTracker.findOne({
            where: {
                date: req.body.date
            }
        })

    }catch (error){
        res.json({error})
    }

})


babyTrackerRoutes.put('/:userId/save/:babyTrackerId', async (req, res) => {
    try{
        const babyTracker = await models.babyTracker.update({
                date: req.body.date,
                timeofFeed:req.body.time,
                duration: req.body.integer,
                napTime: req.body.time,
                durationOfNap: req.body.integer,
                numberOfDiapers: req.body.integer,
            },
            {where: { id: req.params.babyTracker}
        })

    }catch (error){
        res.json({error})
    }

})

module.exports = babyTrackerRoutes;

//
