import Outputs from "./Outputs"

function Search({ projectInventory, handleSearch }) {
    return (
        <>
            <h3>Searching for Something?</h3>
            <form>
                <input type="search" onChange={handleSearch} />
            </form>
            <h3>Sample Projects:</h3>
            <div class="output-section">
                {projectInventory.map((project) => <Outputs project={project} key={project.id} />)}
            </div>
        </>
    )
}

export default Search


