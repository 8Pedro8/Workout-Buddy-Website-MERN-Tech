import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../Components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
          const response = await fetch('http://localhost:4000/api/workouts')
    
          if (response.ok) {
            const json = await response.json()
            setWorkouts(json)
            console.log(json)
          } else {
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
        </div>
     );
}
 
export default Home;