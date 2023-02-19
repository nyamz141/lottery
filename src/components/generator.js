import { useState } from "react";
import "./generator.css";
import DisplayResults from "./results"

var finalArray = []

function SequenceGenerator(){

    var allValues = []

    const minColumns = 6;
    const maxColumns = 10;
    const minRows = 1;
    const maxRows = 8;

    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [columns, setNumberOfColumns] = useState("")
    const [rows, setNumberOfRows] = useState("")
    const [showResults, setShowResults] = useState(false)

    const minValueEntered = (event) => {
        const value = event.target.value
        if(value !== ""){
            setMinValue(event.target.value.toString())
        }
    }

    const maxValueEntered = (event) => {
        const value = event.target.value
        if(value !== ""){
            setMaxValue(event.target.value.toString())
        }
    }

    const numberOfColumnsEntered = (event) => {
        const value = event.target.value
        if(value !== ""){
            setNumberOfColumns(event.target.value.toString())
        }
    }

    const numberOfRowsEntered = (event) => {
        const value = event.target.value
        if(value !== ""){
            setNumberOfRows(event.target.value.toString())
        }
    }

    const generateSequencies = () => {
        if(minValue === "" || maxValue === "" || columns === "" || rows === ""){
            clearAllInput();
            return
        }

        var generatedNumbers = []

        var min = parseInt(minValue)
        if(isNaN(min)){
            clearAllInput();
            return
        }
        var max = parseInt(maxValue)
        if(isNaN(max)){
            clearAllInput();
            return
        }
        var col = parseInt(columns)
        if(isNaN(col)){
            clearAllInput();
            return
        }
        var row = parseInt(rows)
        if(isNaN(row)){
            clearAllInput();
            return
        }

        if(min < 1){
            min = 1
            setMinValue(min)
        }

        if(col < minColumns){
            col= minColumns;
            setNumberOfColumns(col)
        }
        if(col > maxColumns){
            col= maxColumns;
            setNumberOfColumns(col)
        }
        if(row < minRows){
            row = minRows;
            setNumberOfRows(row)
        }
        if(row > maxRows){
            row = maxRows
            setNumberOfRows(row)
        }
        if(max - min <= col){
            max = min + col + 5
            setMaxValue(max)
        }
        if(min > max){
            clearAllInput();
            return
        }

        var random = min;
        allValues = []
        for(var i = 0; i<row; i++){
            for(var j=0; j<col; j++){
                random = generateRandomNumber(min,max);
                while(checkIfNumberExists(random,generatedNumbers)){
                    random = generateRandomNumber(min,max);
                }
                generatedNumbers.push(random)
            }
            allValues.push(generatedNumbers)
            generatedNumbers = []
        }
        finalArray = allValues
        setShowResults(true)
    }

    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const checkIfNumberExists = (number, allNumbers) => {
        if(allNumbers.includes(number) && allNumbers.length > 0){
            return true
        }
        return false
    }

    const clearSequenceSettings = () => {
        allValues = []
        clearAllInput()
        setShowResults(false)
    }

    const clearAllInput = () => {
        setMinValue("")
        setMaxValue("")
        setNumberOfColumns("")
        setNumberOfRows("")
        setShowResults(false)
    }

    var returnResultsClasses = () => {
        return showResults ? "card shadow mb-1 bg-body rounded": "destroy-this-component"
    }

    return(
        <div className="col-sm-12 mt-5">
            <div className="card shadow mb-2 bg-body rounded">
                <h5 className="card-header card-title-text">Sequence Setup</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="setup-input-field mb-3">
                                <input type="number" onChange={minValueEntered} value={minValue} className="form-control generator-input-field" id="floatingInput" placeholder="minimum value" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="setup-input-field mb-3">
                                <input type="number" onChange={maxValueEntered} value={maxValue} className="form-control generator-input-field" id="floatingInput" placeholder="maximum value" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="setup-input-field  mb-3">
                                <input type="number" onChange={numberOfColumnsEntered} value={columns} className="form-control generator-input-field" id="floatingInput" placeholder="column numbers" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="setup-input-field mb-3">
                                <input type="number" onChange={numberOfRowsEntered} value={rows} className="form-control generator-input-field" id="floatingInput" placeholder="numbers of rows" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="generate-clear-sequence mb-2">
                                <button onClick={generateSequencies} className="btn btn-success generator-action-button">Generate</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="generate-clear-sequence">
                                <button onClick={clearSequenceSettings} className="btn btn-danger generator-action-button">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={returnResultsClasses()}>
                <div>
                    {
                        showResults && <DisplayResults value = {finalArray}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default SequenceGenerator;