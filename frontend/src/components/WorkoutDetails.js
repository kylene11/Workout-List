import PropTypes from "prop-types";
import { formatDistance} from 'date-fns'


const WorkoutDetails = ({workout, onWorkoutChange}) =>{
    
    
    const handleClick= async ()=>{
        const response = await fetch("/api/workouts/"+workout._id,{
            method:"DELETE"
        })
    
    
    if (response.ok){
        console.log("workout deleted")
        onWorkoutChange()
}
}




    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            
            <p>number of reps: {workout.reps}</p>
            <p>weight to use: {workout.weight} kg</p>
            <p>created {formatDistance(new Date(workout.createdAt), new Date(),{ addSuffix: true })}</p>
            <span class="material-symbols-outlined" onClick={handleClick}>delete</span>
            
      
        </div>

    )
}
WorkoutDetails.propTypes = {
    workout: PropTypes.object.isRequired,
    onWorkoutChange: PropTypes.func.isRequired,
}


export default WorkoutDetails