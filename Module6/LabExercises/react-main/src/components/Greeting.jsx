import '../App.css';

function Greeting(props) {
    return(<>
        <div className="welcome">
            {/* render: name props */}
            <h3>Welcome {props.name}!</h3>
            {/* render: component has children */}
            {props.children}
        </div>
    </>)
}

export default Greeting;