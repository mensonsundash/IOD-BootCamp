import { createContext, useState } from "react";

export const EmojiContext = createContext(); // first step to create a context

function EmojiProvider(props) {

    // store emojiname in string
    const [currentMood, setCurrentMood] = useState("blush");

    function handleUpdateMood(mood) {
        setCurrentMood(mood);
    }

    return (
        <EmojiContext.Provider value={{currentMood, handleUpdateMood}}>
            {props.children}
        </EmojiContext.Provider>
    );
}

export default EmojiProvider;