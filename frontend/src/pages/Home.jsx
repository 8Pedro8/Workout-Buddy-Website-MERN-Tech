import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import config from '../config';

// components
import WorkoutDetails from "../Components/WorkoutDetails"
import WorkoutForm from "../Components/WorkoutForm"

const Home = () => {
    //const host = 'http://localhost:4000/api/workouts'
    //const host = `${import.meta.env.VITE_REACT_APP_API_URL}`
    const host = config.apiUrl

    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch(host)
    
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
      }, [dispatch])

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