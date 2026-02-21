import { useState, useEffect } from "react";

// Custom Hook features to use fetch from external url and return result as data an error
function useFetch(url) {
    // state variable to hold fetch data
    const [data, setData] = useState(null);// price: stores the fetched BTC price (null means “not loaded yet”)
    const [error, setError] = useState("Ok"); //error; stores the error message (default Ok)
    

    //Run this effect: 
    // - once on first render
    // - again everytime 'currency' changes (as currency is in dependency array)
    useEffect(() => {
        
        if(url) {
            //Initial error message set as default at every changes
            setError('Ok');

            let ignore = false;

            //  creating asynchoronous function to fetch data from external api's
            async function fetchData() {
                try{
                    // Failed to fetch: On 'https://api.coingecko.com' it block because of multiple attempts
                    // const res = await fetch(`/api-coingecko/api/v3/simple/price?ids=bitcoin&names=Bitcoin&symbols=btc&vs_currencies=${currency_lw}`);

                    //so use alternative url 'https://api.coinbase.com' to call api for the selected currency
                    const res = await fetch(url);

                    // if request failed throw an error
                    if(!res.ok) {
                        setError(`Request Failed: ${res.status}`)
                        throw new Error(`Request Failed: ${res.status}`)
                    }

                    const jsonData  = await res.json(); // Waiting response and convert it to JSON data

                    if(!ignore) {
                        setData(jsonData.data);
                    }

                }catch(error) {
                    setError(error.message || 'Something went wrong' );
                    //setting data to null as default
                    setData(null);
                    
                }
            }

            //calling function
            fetchData();

            return() => {
                ignore = true;
            };
        }
    }, [url]);

    //returning with two value to the point where it has been called
    return {data, error};

}

export default useFetch;