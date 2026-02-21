import { useContext, useState } from "react";
import { EmojiContext } from "./Providers/EmojiProvider";

// array of emoji named in public/emojis/ png files
const emojiArr = [
    "blush", "cry", "grin", "hugging_face","innocent", "joy", "laughing","melting_face", "partying_face", "smile", "smiley", "smiling_face_with_3_hearts", "smiling_face_with_tear", "star_struck","wink"
]


function EmojiWithContext() {
    // current state of mood array index
    const [index, setIndex] = useState(0);
    
    // #### CONTEXT PROVIDER
    //getting the context functions EmojiContext from EmojiProvider
    const {currentMood, handleUpdateMood} = useContext(EmojiContext)

    // #### CURRENT EMOJI INFO
    const emojiKey = emojiArr[index];
    const emojiValue = emojiKey.replaceAll("_", " ").toUpperCase();
    const srcFile = `/emojis/${emojiKey}.png`; 
    // switch mood and update context only when button clicked
    const handleSwitch = () => {
        const randomNumber = Math.floor(Math.random() * emojiArr.length);
        
        setIndex(randomNumber);

        //calling handleUpdateMoode to update currentMood into context only when switch button clicked
        handleUpdateMood(emojiArr[randomNumber]); //store emoji information in the Context.
    }
    

    return (
        <>
            
            <div>
                <div style={{marginTop:"150px"}}>
                    <h2>Lab Exercise 3</h2>

                    <h3>1. Emoji Component</h3>
                    <p>Emoji Component from Module 6 Lab Exercise 3 and create Context for storing the current emoji/mood</p>
                </div>
                <div className="emoji-container">
                    <div className="emoji">
                        <img src={srcFile} alt={emojiValue} />
                        <h3>Current Mood in Context: <strong> <span style={{ color: 'red'}}>({currentMood}) </span></strong> </h3>
                    </div>
                    <div>
                        <button onClick={handleSwitch}>Switch Mood</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmojiWithContext;