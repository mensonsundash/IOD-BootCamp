import { Routes, Route }from "react-router-dom"
import PageNotFound from "../Components/Common/PageNotFound";
import HomePage from "../Components/HomePage";
import BitcoinRates from "../Components/BitcoinRates";
import BitcoinRatesCustom from "../Components/BitcoinRatesCustom";
import BitcoinRatesReducer from "../Components/BitcoinRatesReducer";
import EmojiWithContext from "../Components/EmojiWithContext";
import EmojiProvider from "../Components/Providers/EmojiProvider";
import BitcoinRatesWithContext from "../Components/BitcoinRatesWithContext";
import Login from "../Components/Login";
import MUILogin from "../Components/MUILogin ";
import MUIBitcoinRates from "../Components/MUIBitcoinRates";
function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            {/* Lab Exercise-1 BitcoinRates*/}

                {/* ######### Exercise 1-4 without MUI ############# */}
                    {/* <Route path="/bitcoinRates" element={<BitcoinRates></BitcoinRates>}></Route> */}
                
                {/* ##### Exercise 5 With MUI ##### */}    
                <Route path="/bitcoinRates" element={<MUIBitcoinRates></MUIBitcoinRates>}></Route>
            
            {/* Lab Exercise-2 BitcoinRatesCustom Hooks */}
                <Route path="/bitcoinRatesCustom" element={<BitcoinRatesCustom></BitcoinRatesCustom>}></Route>
            {/* Lab Exercise-2 BitcoinRates Extension with Reducer */}
                <Route path="/bitcoinRatesReducer" element={<BitcoinRatesReducer></BitcoinRatesReducer>}></Route>
            {/* Lab Exercise-3 Emoji With Context */}
                {/* Providing the context at top level of EmojiWithContext */}
                <Route path="/emojiWithContext" element={
                        <EmojiProvider>
                            <EmojiWithContext></EmojiWithContext>
                            <BitcoinRatesWithContext></BitcoinRatesWithContext>
                        </EmojiProvider>
                    }
                ></Route>
            {/* Lab Exercise-4 As already done Lab-2-3  */}
                
                {/* ######### Exercise 1-4 without MUI ############# */}
                {/* <Route path="/login" element={<Login></Login>}></Route> */}
                
                {/* ##### Exercise 5 with MUI ##### */}
                    <Route path="/login" element={<MUILogin></MUILogin>}></Route>

            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    );
}

export default AppRoutes;