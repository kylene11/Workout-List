const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const workoutRouters = require("./routes/workouts")


// creates an express app 
const app = express()

//middleware (logging the type of req that we are calling)
app.use(express.json())
app.use((req,resp,next)=>{
    console.log(req.path,req.method)
    next()

})

// react to requests, routes
//app.get("/",(req,resp) =>{

  //  resp.json({msg: "Welcome to the app"})

// })

// this will grabs all the diff routes in the workouts.js and attach them in the app
// the /api/workouts is calling a path where all the routes iin workouts are accessible under this path
app.use("/api/workouts",workoutRouters)

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for requests 
app.listen(process.env.PORT,() => {

    console.log("connected to db and listening on port 4000")

})


    })
    .catch((error)=>{
        console.log(error)
    })

