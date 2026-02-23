import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";

function AppRoutes(){

    return(
        <Routes>
            {/* Non-protected routes */}
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>


            {/* Protecte Routes */}

            <Route path="/dashboard" element={
                <ProtectedRoutes>
                    <Dashboard></Dashboard>
                </ProtectedRoutes>
            }>
            </Route>

            {/* Protected Routes by role */}
            <Route path="/admin" element={
                <ProtectedRoutes>
                    <Admin></Admin>
                </ProtectedRoutes>
            }>
            </Route>
        </Routes>
    );
}

export default AppRoutes;