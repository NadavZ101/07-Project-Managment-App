import { useState } from "react"

export function NewTask({ onAddTask }) {

    const [newTask, setNewTask] = useState('')

    function handleChange(value) {
        setNewTask(value)
    }

    function handleClick() {
        if (newTask.trim() === '') return
        onAddTask(newTask)
        setNewTask('')
    }

    return <div className="new-task">
        <input className="input"
            type="text"
            onChange={(event) => handleChange(event.target.value)}
            value={newTask}
        />
        <button onClick={handleClick}>Add Task</button>
    </div>
}