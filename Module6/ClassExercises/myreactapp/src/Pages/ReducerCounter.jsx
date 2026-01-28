import { useReducer } from "react";
import "../App.css"
function ReducerCounter(){
    
    const reducer = (state, action) => {
        if(action.type == 'increment') {
            return state + 1;
        } else if(action.type == 'decrement') {
            return state - 1;
        }else{
            return state;
        }
    }

    const[counter, dispatch] = useReducer(reducer, 0);
    
    const handleIncrement = () =>{
        dispatch({ type: 'increment' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'decrement' });
    };

    
    
    return(
        <>
            <div>
                <h2>Counter:</h2>
                <button onClick={handleDecrement}>-</button>
                <span className="counterBox">{counter}</span>
                <button onClick={handleIncrement}>+</button>
                
            </div>
        </>
    )
}

export default ReducerCounter;