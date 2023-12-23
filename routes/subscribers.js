const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
const subscriber = require('../models/subscriber')


// Getting all
router.get('/', async (req, res) => {
    try {
        const subcribers = await Subscriber.find()
        res.json(subcribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Getting one
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber.name)
})

// Creating one
router.post('/', async (req, res) => {
    const subcriber = new Subscriber({
        name: req.body.name, 
        subscribeToChanel: req.body.subscribeToChanel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Updating one
router.patch('/:id', getSubscriber, async (req, res) => {
    
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribeToChanel != null) {
        res.subscriber.subscribeToChanel = req.body.subscribeToChanel
    }

    try {
        const updateSubscriber = await res.body.subcriber.save()
        res.json(updateSubscriber)
    }catch (error){
        res.status(400).json({message: error.message})
    }
})

// Deleting one
router.delete('/:id', getSubscriber, async (req, res) => {
    try{
        await res.subscriber.remove()
        res.json({message: 'Deleted Subscriber'})
    }catch (error){
        res.status(500).json({message: error.message})
    }
})


async function getSubscriber(req, res, next){
    let subscriber

    try {
        subscriber = await Subscriber.findById(req.param.id)
        if (subscriber == null){
            return res.status(404).json({message: 'Cannot find subscriber'})
        }
    }catch{
        return res.status(404).json({message: error.message})
    }
    res.subscriber = subscriber
    next()
}


module.exports = router