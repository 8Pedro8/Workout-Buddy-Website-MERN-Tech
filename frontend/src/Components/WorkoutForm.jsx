import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import config from '../config';

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => { 
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch(config.apiUrl, {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json() // we get a json back from the server

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New Workout added', json)

            // Update global context state (with this global update it will cause rerender)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
             />

            <label>Load (in kg):</label>
            <input 
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error' : ''}
             />

            <label>Reps:</label>
            <input 
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps') ? 'error' : ''}
             />

             <button>Add Workout</button>

             {error && <div className="error">{ error }</div>}
        </form>
     );
}
 
export default WorkoutForm;