import { Tasks } from "./Tasks"

export function ProjectDetails({ project, onRemove, onAddTask, onDeleteTask, tasks }) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return <>
        {project &&
            <div className="project-details">
                <header>
                    <div className="action">
                        <h1>{project.title}</h1>
                        <button className="remove-btn" onClick={() => onRemove(project.id)}>Delete</button>
                    </div>
                    <p className="date">{formattedDate}</p>
                    <p>{project.description}</p>
                </header>
                <hr></hr>
                <Tasks
                    onAddTask={onAddTask}
                    onDeleteTask={onDeleteTask}
                    tasks={tasks}
                />
            </div>
        }
    </>
}
