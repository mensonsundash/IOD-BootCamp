// useState is a React hook
import { useState } from "react";
import "../App.css";
// save in MoodChanger.jsx
function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");

  function changeMood() {
    if (mood == "happy") setMood("Sad");
    else if (mood == "Sad") setMood("happy");
  }

  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood);
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <>
      <div className="MoodChanger componentBox">Current Mood: {mood}

        <button onClick={changeMood}>Change Mood</button>

        
        {/* Using arrow functions */}
        <button onClick={() => setMood("tired")}>Stay Up Late</button>
        {/* Using custom event handler functions */}
        <button onClick={handleRunningLate}>Running Late</button>
        <button onClick={handleWinLotto}>Win Lotto</button>
      </div>
    </>
  );
}

export default MoodChanger;