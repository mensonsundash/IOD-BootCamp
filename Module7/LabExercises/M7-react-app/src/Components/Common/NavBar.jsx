import { NavLink } from "react-router-dom";
import "../../App.css"
function NavBar() {

    return (
        <>
        <nav className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/bitcoinRates">BitcoinRates</NavLink></li>
                <li><NavLink to="/bitcoinRatesCustom">BitcoinRatesCustom</NavLink></li>
                <li><NavLink to="/bitcoinRatesReducer">BitcoinRatesReducer</NavLink></li>
            </ul>{" "}
        </nav>
        </>
    );
}

// Save as Components/Common/NavBar.jsx and render in App.jsx
// ABOVE <AppRoutes />

export default NavBar;