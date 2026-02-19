import { Routes, Route }from "react-router-dom"
import PageNotFound from "../Components/Common/PageNotFound";
import HomePage from "../Components/HomePage";
import BitcoinRates from "../Components/BitcoinRates";
import BitcoinRatesCustom from "../Components/BitcoinRatesCustom";
import BitcoinRatesReducer from "../Components/BitcoinRatesReducer";
function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            {/* Lab Exercise-1 */}
                <Route path="/bitcoinRates" element={<BitcoinRates></BitcoinRates>}></Route>
            {/* Lab Exercise-2 */}
                <Route path="/bitcoinRatesCustom" element={<BitcoinRatesCustom></BitcoinRatesCustom>}></Route>
            {/* Lab Exercise-2 Extension with Reducer */}
                <Route path="/bitcoinRatesReducer" element={<BitcoinRatesReducer></BitcoinRatesReducer>}></Route>
            
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    );
}

export default AppRoutes;