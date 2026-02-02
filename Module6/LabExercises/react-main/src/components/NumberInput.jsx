// LAB6
// function taking destructure variables or functions
function NumberInput({ label, value, onChangeFunc}){
    return(
        <>
            {/* 
            ///////// original form input section
            <div>
                <label>Number 1</label>
                <input type="number" min="0" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            </div> */}
            
            <div>
                <label>{label}</label>
                <input type="number" min="0" value={value} onChange={(e) => onChangeFunc(e.target.value)}/>
            </div>
        </>
    )
}

export default NumberInput;