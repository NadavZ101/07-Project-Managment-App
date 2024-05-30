import noProjectImage from '../assets/no-projects.png'

export function NoProjectSelected({ onCreateProject }) {

    return <div className="no-project">
        <img src={noProjectImage} alt="no project image" />
        <h2>No project selected</h2>
        <p>Select a project or get started with a new one</p>
        <p>
            <button onClick={onCreateProject}>Create new project</button>
        </p>
    </div>
}