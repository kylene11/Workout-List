
import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = ()=> {
    const [workouts, setWorkouts] = useState(null)
    // useEffect fires a function only when the component is first rendered
    // afterwards it wont be fired, so it only fires once
    useEffect(()=>{
        const fetchWorkouts = async() =>{
            // this will store the response from the fetch command into the const response object
            const response = await fetch("/api/workouts")
            // this will pass the json from the response object which will give us an array of workout objects 
            const json = await response.json()
            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    const handleWorkoutChange = async () => {
        // After adding or deleting a workout, call this function to refresh the workouts
        const response = await fetch("/api/workouts");
        const json = await response.json();
        if (response.ok) {
            setWorkouts(json)
        }
    }

    
    // the classname lets u style the div
    // when u fire the workouts.map() function u use normal brackets rather than curly becos u are returning a template
    return (
        <div className="home">
            <div className="workouts">
    
                {workouts && workouts.map((workout)=>(
                   
                        

                    <WorkoutDetails key= {workout._id} workout ={workout} onWorkoutChange={handleWorkoutChange}>

                    </WorkoutDetails>
                    
       
                    
                ))}

            </div>
            <WorkoutForm onWorkoutChange={handleWorkoutChange}>
                
            </WorkoutForm>
                
            
        </div>
    )
}

export default Home
