import { NewTask } from "./NewTask";

export function Tasks({ project, tasks, onAddTask, onDeleteTask }) {
    console.log("🚀 ~ Tasks ~ tasks:", tasks)


    return <section className="tasks-container">
        <h2>Tasks</h2>
        <NewTask
            onAddTask={onAddTask}
        />
        {tasks.length === 0 &&
            <p>This projects does not have any tasks yet</p>
        }

        {tasks.length > 0 &&
            <ul>
                {tasks.map(task =>
                    task.projectId === project.id && (
                        <li key={task.id} className="task">
                            <span>{task.text}</span>
                            <button onClick={() => onDeleteTask(task.id)}>Clear</button>
                        </li>
                    )
                )}
            </ul>
        }
    </section>
}