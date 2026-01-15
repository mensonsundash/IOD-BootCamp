import FormattedDate from "./FormattedDate";
import UserInfo from "./UserInfo";

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <>
        <div className="Comment componentBox">
        <UserInfo author={props.author}></UserInfo>
        <div className="Comment-text">
            {" "}
            {/* the actual comment text is another aspect */}
            {props.text}
        </div>
        <FormattedDate date={props.date}></FormattedDate>
        </div>        
    </>
    
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx

export default ComplexComment;
