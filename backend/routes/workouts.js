const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workout'})
})

// Post a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a workout'})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a workout'})
})

module.exports = router