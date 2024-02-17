const mongoose = require("mongoose")

const Schema = mongoose.Schema

// the schema will define the structure of the documents u save to the collection

const workoutSchema = new Schema({

    title:{
        type: String,
        required: true
    },

    reps:{
        type: Number,
        required: true
    },

    weight:{
        type:Number,
        required:true
    }
// when u create a new document the timestamp will tell u when its created as well as when it was last updated
}, {timestamps: true})

module.exports = mongoose.model("Workout", workoutSchema)
