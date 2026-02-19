import { useState } from "react";
import useFetchReducer from "../Hooks/useFetchReducer";

// List of currencies user can choose from
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD','ERROR'];

function BitcoinRatesReducer(){

    const [currency, setCurrency] = useState(currencies[0]); // currency: stores the currently selected currency (default = first item => "USD")
    
    //Mapping & Create <option> elements for the <select> dropdown
    const options = currencies.map(curr =>
        <option key={curr} value={curr} >
            {curr}
        </option>
    );

    //as coingecko api accepts currency codes into lowercase
    const currency_lw = currency.toLowerCase();
    
    // using custom hooks for extracting external data and destructure into data and error
    const {data, error} = useFetchReducer(`https://api.coinbase.com/v2/prices/BTC-${currency_lw}/spot`);
    
    //Optional chaining (Graceful Degradation) "?" with . notation to prevent from fail loading with undefined value
    const amount =  data?.amount; // Extract the price from coinbase
    const price = amount ? parseFloat(amount).toFixed(2) : null;// Convert to number and keep 2 decimal places
    

    return(
        <>
            <div>
                <p>Bitcoin Rates fetch from external URL and display current price of Bitcoin in the selected Currency</p>
                <p>It uses Custom Hook for extracting data Synchonization Process </p>
                <p>Implemented with useReducer to handle the internal state management of custom hook.</p>
            </div>
            <div className="BitcoinRates ComponentBox">
                <h3>Bitcoin Exchange Rates</h3>
                <label>Choose Currency:

                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        {options}
                    </select>
                </label>
                <div className="result">
                    <div className="muted">
                        1 BTC = <strong className="price">{currency} {Number(price) ? `$${price}`: 'Loading...'}</strong>
                    </div>
                </div>
                <p className="error">{error}</p>
                
            </div>
        </>
    )
}

export default BitcoinRatesReducer;