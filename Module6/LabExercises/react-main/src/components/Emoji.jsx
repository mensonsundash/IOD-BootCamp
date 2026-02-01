import { useState } from "react";
import EmojiRender from "./EmojiRender";

// array of emoji named in public/emojis/ png files
const emojiArr = [
    "blush", "cry", "grin", "hugging_face","innocent", "joy", "laughing","melting_face", "partying_face", "smile", "smiley", "smiling_face_with_3_hearts", "smiling_face_with_tear", "star_struck","wink"
]

// M6 LAB Exercise 3
function Emoji(){
    
    // index stores current index , default 0
    // setIndex is a function for updating emojiArr index
    const [index, setIndex] = useState(0);

    //calls setIndex with a random number generated between 0-length of array
    const handleSwitch = () =>{ 
        const randomNumber = Math.floor(Math.random() * emojiArr.length);//random number between 0 - length of array
        setIndex(randomNumber);       
    }

    const emojiKey = emojiArr[index];
    const emojiName = emojiKey.replaceAll("_", " ").toUpperCase(); //replacing and capitalizing array named "_" with " "
    
    const srcFile = `/emojis/${emojiKey}.png`; //setting public folder access to emojis folder with current .png fle name
    
    return(
        <>
            <div className="emoji-container">
                <EmojiRender srcFile={srcFile} emojiName={emojiName}></EmojiRender>
                <div>
                    <button onClick={handleSwitch}>Switch</button>
                </div>
            </div>
        </>
    )
}

export default Emoji;