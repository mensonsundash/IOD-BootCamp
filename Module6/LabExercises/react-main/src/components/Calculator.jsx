import { useState } from "react";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import CalculatorResult from "./CalculatorResult";

// LAB6
function Calculator () {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [op, setOp] = useState("+");
    const [result, setResult] = useState(0);

    const handleCalculate = () => {
        // convert string input into number
        const a = Number(num1);
        const b = Number(num2);

        // validate number
        if(!num1 || !num2){
            setResult("Please enter both numbers.")
            return;
        }

        if(op === "/" && b===0){
            setResult("Cannot divide by 0");
            return;
        }

        let result = 0;
        switch(op){
            case "/": 
                result = a/b;
                break;
            case "x":
                result = a*b;
                break;
            case "+":
                result = a+b
                break;
            case "-":
                result = a-b;
                break;
            default:
                
        }
        setResult(result);
    }

    const handleClear = () => {
        setNum1("");
        setNum2("")
        setOp("+");
        setResult(0);
    }



    return(
        <>
        <div className="form-container">
            <h3>Simple Calculator</h3>
            <form className="flex-row">
                {/* sending attribute being arguments as parameter to child component */}
                <NumberInput label="Number 1" value={num1} onChangeFunc={setNum1}></NumberInput>

                <SelectInput label="Operations" value={op} onChangeFunc={setOp}></SelectInput>
                
                <NumberInput label="Number 2" value={num2} onChangeFunc={setNum2}></NumberInput>
            </form>

            <CalculatorResult label="Result: " result={result}></CalculatorResult>

            <div>
                <button onClick={handleCalculate}>Calculate</button>
                <button onClick={handleClear}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default Calculator;