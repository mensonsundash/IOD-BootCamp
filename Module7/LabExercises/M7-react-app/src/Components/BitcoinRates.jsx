import { useEffect , useState } from "react";

// List of currencies user can choose from
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD','ERROR'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]); // currency: stores the currently selected currency (default = first item => "USD")
    const [price, setPrice] = useState(null);  // price: stores the fetched BTC price (null means “not loaded yet”)
    const[error, setError] = useState("Ok"); //error; stores the error message (default Ok)

    //Mapping & Create <option> elements for the <select> dropdown
    const options = currencies.map(curr =>
        <option key={curr} value={curr} >
            {curr}
        </option>
    );

    //Run this effect: 
    // - once on first render
    // - again everytime 'currency' changes (as currency is in dependency array)
    useEffect(() => {
        //Initial error message set as default at every changes
        setError('Ok');
        //as coingecko api accepts currency codes into lowercase
        const currency_lw = currency.toLowerCase();

        // creating asynchoronous function to fetch data from external api's
        async function fetchRate() {
            try{
                // Failed to fetch: On 'https://api.coingecko.com' it block because of multiple attempts
                // const res = await fetch(`/api-coingecko/api/v3/simple/price?ids=bitcoin&names=Bitcoin&symbols=btc&vs_currencies=${currency_lw}`);

                //so use alternative url 'https://api.coinbase.com' to call api for the selected currency
                const res = await fetch(`https://api.coinbase.com/v2/prices/BTC-${currency_lw}/spot`)

                // if request failed throw an error
                if(!res.ok) {
                    setError(`Request Faild: ${res.status}`)
                    throw new Error(`Request Faild: ${res.status}`)
                }

                const data  = await res.json(); // Waiting response and convert it to JSON

                const amount =  data.data.amount; // Extract the price from coinbase ////data.bitcoin?.[currency_lw];
                
                // If price not found throw error
                if(amount == null) {
                    setError("Price not found in CoinBase");
                    throw new Error("Price not found in CoinBase");
                }

                // Convert to number and keep 2 decimal places
                const newPrice = parseFloat(amount).toFixed(2);
                

                // Update state with the new price (this triggers a re-render)
                setPrice(newPrice)

            } catch(error) {
                setError(error.message || 'Something went wrong' );
                console.log(error.message || 'Something went wrong' );
                //setting price to null as default
                setPrice(null);
            }
            
        }

        // Call Async Function : fetching awaited data after it response with data 
        fetchRate();

        // Cleanup function return runs when:
        //  - the component unmount or currency changes
        return() => {
            console.log("Cleanup Effect")
        }
        
    }, [currency]); // Dependency: refetch whenever currency changes

    
    return(
        <>
        <div>
            <p>Bitcoin Rates fetch from external URL and display current price of Bitcoin in the selected Currency</p>
            <p>It uses UseEffect Hook with Cleanup and appropriate Dependencies</p>
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
                        1 BTC = <strong className="price">{currency} {price ? `$${price}`: 'Loading...'}</strong>
                    </div>
                </div>
                <p className="error">{error}</p>
                
            </div>
        </>
    )
}

export default BitcoinRates;