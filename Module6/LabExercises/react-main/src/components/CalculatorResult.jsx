function CalculatorResult({label, result}) {

    return(
        <>
            <div className="result-box">
                <label>{label}</label>
                <span className="result" >{result}</span>
            </div>
        </>
    )
}

export default CalculatorResult;