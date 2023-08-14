import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../Components/WorkoutDetails"
import WorkoutForm from "../Components/WorkoutForm"

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch('http://localhost:4000/api/workouts')
    
          if (response.ok) {
            const json = await response.json()
            console.log(json)

            dispatch({type: 'SET_WORKOUTS', payload: json})
          } 
          else {
            console.error(`Error fetching workouts: ${response.statusText}`);
          }
        }
    
        fetchWorkouts()
      }, [])

    return ( 
        <div className="home">
            <div className="workouts">
                { workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;