import "./results.css"
import SingleResult from "./single result/singleResult"

const GeneratedResults = ({value}) =>{
    const results = value.map((sequence,index) => {
        return <SingleResult data={sequence} key={index}/>
    })
    return(
        <div data-testid="results-parent-element" className="results-parent">
            {results}
        </div>
    )
}

export default GeneratedResults;