import Header from "./Header"
import Search from "./Search"
import './stylesheet.css'
import { useState } from "react"

const projectInventory = [
];

function App() {
  const [displayedProjects, setDisplayedProjects] = useState(projectInventory)
  const [projects, setProjects] = useState(projectInventory)

  const handleAddProject = (event) => {
    event.preventDefault();
    let newId;
    const titleInput = event.target[0].value
    const descriptionInput = event.target[1].value
    const projectIds = projects.map((project) => project.id)
    if (projectIds.length === 0) {
      newId = 0
    } else {
      const maxIdNumber = Math.max(...projectIds)
      newId = maxIdNumber + 1
    }
    const newProject = {
      id: Number(newId),
      title: titleInput,
      description: descriptionInput
    }
    const updatedProjects = [...projects, newProject]
    setProjects(updatedProjects)
    setDisplayedProjects(updatedProjects)
    event.target[0].value = ''
    event.target[1].value = ''
  }

  const handleSearch = (event) => {
    const userInput = event.target.value.toLowerCase()
    const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(userInput))
    setDisplayedProjects(filteredProjects)
  }

  return (
    <>
      <Header handleAddProject={handleAddProject} />
      <Search projectInventory={displayedProjects} handleSearch={handleSearch} />
    </>
  )
}

export default App
