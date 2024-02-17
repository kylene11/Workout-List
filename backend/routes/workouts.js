const express = require("express")
const Workout = require("../models/workoutModel")
const workoutModel = require("../models/workoutModel")
const {createWorkout, getAllWorkouts,getWorkout,deleteWorkout,updateWorkout} = require("../controllers/workoutController")

const router = express.Router()

// get all workouts
router.get("/", getAllWorkouts)

// get a single workout
router.get("/:id", getWorkout)

// create a new workout
router.post("/",createWorkout)

// delete a new workout
router.delete("/:id",deleteWorkout)

// update a new workout
router.patch("/:id",updateWorkout)

module.exports = router
