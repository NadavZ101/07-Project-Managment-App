import { useState } from "react";
import { ProjectsSidebar } from "./components/ProjectsSidebar";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // not adding or selecting a project 
    projects: []
  })

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

  console.log("🚀 ~ App ~ projectsState:", projectsState)


  let content
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveProject={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />

  }

  return (
    <div className="app">
      <h1 className="">Manage Your Projects</h1>
      <ProjectsSidebar
        onCreateProject={handleCreateProject}
        projects={projectsState.projects}
      />
      {content}


    </div>
  );
}

export default App;
