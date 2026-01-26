import { useState } from "react";

function Counter() {
    //state data and function
    const [count, setCount] = useState(0)
    
    // let count = 0

    return (
        <>
        
        <div>Counter: {count}</div>

        <button onClick={() =>{
            setCount(count + 1);
        }}>Counter</button>        
        </>
    )
}

export default Counter;