function Outputs({ project }) {
    return (
        <div className="card">
            <p className="title-and-desc-text">Title:</p>
            <p className="title-and-desc">{project.title}</p>
            <p className="title-and-desc-text">Decription of Project: </p>
            <p className="title-and-desc">{project.description}</p>
        </div>
       
    )
}

export default Outputs
