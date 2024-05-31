import { useState } from "react";
import { ProjectsSidebar } from "./components/ProjectsSidebar";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectDetails } from "./components/ProjectDetails";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // not adding or selecting a project 
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }

  function handleCreateProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // Adding a new project
      }
    })
  }

  function handleAddProject(projectDate) {

    const newProject = {
      ...projectDate,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleProjectDetails(projId) {
    console.log("🚀 ~ handleProjectDetails ~ projId:", projId)

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projId
      }
    })
  }

  function getProjectById(projId) {
    const projIdx = projectsState.projects.findIndex(proj => proj.id === projId)
    if (projIdx === -1) return
    let selectedProject = projectsState.projects[projIdx]
    return selectedProject
  }

  function handleRemoveProject(projId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,  //after deletion will show NoProjectSelected cmp
        projects: prevState.projects.filter(proj => proj.id !== projId)
      }
    })
  }

  let content
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveProject={handleAddProject} onCancelProject={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />

  }

  return (
    <div className="app">
      {/* <h1 className="">Manage Your Projects</h1> */}
      <ProjectsSidebar
        onCreateProject={handleCreateProject}
        projects={projectsState.projects}
        onSelectProject={handleProjectDetails}
      />
      {content}

      {projectsState.selectedProjectId &&
        <ProjectDetails
          project={getProjectById(projectsState.selectedProjectId)}
          onRemove={handleRemoveProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasks={projectsState.tasks}
        />
      }


    </div>
  );
}

export default App;
