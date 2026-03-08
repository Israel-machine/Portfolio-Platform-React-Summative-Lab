import AddProjectsForm from "./AddProjectsForm"

function Header({ handleAddProject }) {
    return (
        <>
            <h2 className="Header">Project Show Case</h2>
            <AddProjectsForm handleAddProject={handleAddProject} />
        </>
    )
}

export default Header

