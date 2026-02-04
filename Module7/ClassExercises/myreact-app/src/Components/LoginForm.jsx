import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    const [emailInputProps, resetEmail] = useFormInput("");
    const [passwordInputProps, resetPassword] = useFormInput("");

    if(email.length < 5) {
        setResult("EMail can not be less than 5 character");
    }else if(password.length < 4) {
        setResult("Password cannot bt less than 4 character");
    } else{
        setResult("Form is submitted successfully");
    }

    function FormSubmitted(){
        resetEmail();
        resetPassword();
        alert(`Email: ${email} & Password: ${password}`)
    }
    return (<>
        <div>
            <label> Email:
                {/* <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/> */}
                <input {...emailInputProps} />
            </label>
        </div>      

        <div>
            <label> Password:
                {/* <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/> */}
                <input {...passwordInputProps} />
            </label>
        </div> 
        <div>
            <button onClick={FormSubmitted}>Submit</button>
        </div>       
        <div>
            <label>{result}</label>
        </div>
    </>)
}

export default LoginForm