import { useState } from "react";
import Clock from "./Clock";

function ClockDisplay(){
    const[showClock, setShowClock] = useState(false);

    function ToggleClock() {
        setShowClock(!showClock);
    }

    return(
        <>
            <div>
                {showClock && <Clock></Clock>}
                <br/>
                <button onClick={ToggleClock}>Toggle Show Clock</button>    
            </div>
            
        </>
    );
}

export default ClockDisplay;