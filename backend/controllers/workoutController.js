const workoutModel = require("../models/workoutModel")
const mongoose = require("mongoose")

// get all workouts
const getAllWorkouts = async(req, resp)=>{
    const workouts = await workoutModel.find({}).sort({createdAt: -1})
    resp.status(200).json(workouts)
    
}



// get a single workout
const getWorkout = async(req, resp)=>{
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error: "No such workout"})
    }
    const workout = await workoutModel.findById(id)
    if (!workout){
        return resp.status(400).json({error:error.message})
    }
    resp.status(200).json(workout)
}

// create a new workout
const createWorkout = async(req,resp) =>{
    const{title,reps,weight} = req.body

    // add doc to databse
    try{
        const workout = await workoutModel.create({title,reps,weight})
        resp.status(200).json(workout)

    } catch(error){
        resp.status(400).json({error:error.message})
    }

}

// delete a workout 
const deleteWorkout = async(req, resp) =>{
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error: "No such workout"})
    }
    const workout = await workoutModel.findOneAndDelete({_id: id})

    if (!workout){
        return resp.status(400).json({error:error.message})
    }
    resp.status(200).json(workout)
}

// update a workout 

const updateWorkout = async(req,resp)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(404).json({error: "No such workout"})
    }
    const workout = await workoutModel.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout){
        return resp.status(400).json({error:error.message})
    }
    resp.status(200).json(workout)
}





module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}