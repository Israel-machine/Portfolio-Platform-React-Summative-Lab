function AddProjectsForm({ handleAddProject }) {

    return (
        <>
        <div id="form-container">
             <h2 className="Header">Add Projects</h2>
            <form onSubmit={handleAddProject}>
                <div className="project-title">
                    <label>Project Title</label>
                    <input type="text" />
                </div>
                <div className="project-description">
                    <label>Project Description</label>
                    <input type="text" />
                </div>
                <button>Add</button>

            </form>
        </div>
           
        </>
    )
}
export default AddProjectsForm