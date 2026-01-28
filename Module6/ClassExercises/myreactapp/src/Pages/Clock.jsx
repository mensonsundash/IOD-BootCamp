import { useEffect, useState } from "react";

function Clock() {

    const [date, setDate] = useState(new Date());
    
    const tick = () => {
        setDate(new Date());
        console.log("Tick");
    }

    useEffect(() => {
        let intervalID = setInterval(() => tick(), 1000);
        console.log("Clock component mounted")

        return() => {
            console.log("Clock component unmounted");
            clearInterval(intervalID)
        };
    }, []);

   

    return (
        <>
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </>
    );
}

export default Clock;