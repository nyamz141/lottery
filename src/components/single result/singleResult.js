import "./singleResult.css"

function SingleResult({data}){
    const processSequence = () => {
        var result = ""
        var sortedArray = data.sort(function(a,b){return a-b})
        sortedArray.map((item,index) => {
            if(index < (data.length - 1)){
                result += item.toString()+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
            }else{
                result += item.toString()
            }
        })
        return result
    }
    const resultData = processSequence()
    
    return(
        <div className="card border-success mb-3 mt-3 results-display-card">
            {/* <div className="card-header">
                <button onClick={saveSequence} className="btn btn-success">Save </button>
            </div> */}
            <div className="card-body text-success calculated-values-container">
                <h2 className="card-title">{resultData}</h2>
            </div>
        </div>
    )
}

export default SingleResult;