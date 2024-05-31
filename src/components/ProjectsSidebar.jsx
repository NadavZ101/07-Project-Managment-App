import { useState } from "react"
import { Input } from "./Input"

export function ProjectsSidebar({ onCreateProject, projects, onSelectProject }) {

    return (
        <aside className="sidebar">
            <h2>Your Projects</h2>
            <div>
                <button onClick={onCreateProject}>+ Add Project</button>
            </div>
            <ul>
                {projects.length > 0 &&
                    projects.map(project =>
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)} className="proj-btns">{project.title}</button>
                        </li>)
                }
            </ul>
        </aside>
    )
}