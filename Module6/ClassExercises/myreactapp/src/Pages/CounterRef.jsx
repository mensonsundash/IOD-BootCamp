import { useState, useRef } from "react";

function CounterRef() {
    //state data and function
    const [count, setCount] = useState(0)
    
    let counterRef = useRef(0);

    alert(counterRef.current)
    return (
        <>
        
        <div>Counter: {count}</div>

        <button onClick={() =>{
            counterRef.current  = counterRef.current + 1;
            setCount(count + 1);
        }}>Counter</button>        
        </>
    )
}

export default CounterRef;