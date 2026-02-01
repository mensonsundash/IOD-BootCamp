import "../App.css";

// M6 LAB Exercise 3
function EmojiRender(props) {
    return(
        <>
        <div className="emoji">
            <img src={props.srcFile} alt={props.emojiName}/>
            <h3>{props.emojiName}</h3>
        </div>
        </>
    )
}

export default EmojiRender;