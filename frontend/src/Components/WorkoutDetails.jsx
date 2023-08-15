import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import config from '../config';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const res = await fetch(config.apiUrl + workout._id, {
            method: 'DELETE'
        })

        if (res.ok) {
            const json = await res.json()
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong> { workout.load }</p>
            <p><strong>Reps: </strong> { workout.reps }</p>
            <p>{ formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true }) }</p>
            <span className="material-symbols-outlined" onClick={handleClick}> delete </span>
        </div>
     );
}
 
export default WorkoutDetails;