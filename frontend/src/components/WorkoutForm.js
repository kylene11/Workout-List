import { useState } from "react"
import PropTypes from "prop-types"

const WorkoutForm = ({onWorkoutChange})=> {
    const[title,setTitle] = useState("")
    const[reps,setReps] = useState("")
    const[weight,setWeight] = useState("")
    const[error,setError] = useState(null)
    const handleSubmit = async(e) =>{
        //this line of code is to prevent the the page from default refreshing
        e.preventDefault()
        const workout = {title,reps,weight}

        const response = await fetch("/api/workouts",{
            method:"POST",
            body:JSON.stringify(workout),
            headers:{
                "Content-Type":"application/json"
            }
        
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)

        }
        if (response.ok){
            setTitle("")
            setReps("")
            setWeight("")
            setError(null)
            console.log("new workout added",json)
            onWorkoutChange()
        }
        
       
    }

    
    return (
        <form action="post" className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout:</h3>
            <label htmlFor="exercise_title">Exercise title:</label>
            <input type="text" id="exercise_title"
            onChange={(e)=> setTitle(e.target.value)}
            value = {title}>
            
            </input>
            <label htmlFor="exercise_reps">Reps:</label>
            <input type="number" id="exercise_reps"
            onChange={(e)=> setReps(e.target.value)}
            value = {reps}
            required min="0">
            
            </input>
            <label htmlFor="exercise_weight">Weights to use<br></br> (in kg):</label>
            <input type="number" id="exercise_weight"
            onChange={(e)=> setWeight(e.target.value)}
            value = {weight}
            required min="0">
            
            </input>
            <p></p>
            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>


    )
}
WorkoutForm.propTypes = {
        onWorkoutChange: PropTypes.func.isRequired,
    }
export default WorkoutForm