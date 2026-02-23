import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// Restrict access to logged-in-users only
function ProtectedRoutes({children, role}){

    const  {user} =  useContext(AuthContext);

    //redirect to login if not logged in
    if(!user){
        return <Navigate to="/" replace/>
    }

    //Role restriction
    if(role && user.role !== role) {
        return <Navigate to="/dashboard" replace></Navigate>
    }

    return children;
}

export default ProtectedRoutes;