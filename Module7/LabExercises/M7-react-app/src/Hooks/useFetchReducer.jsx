import { useEffect, useReducer } from "react";

// Initial state for the hook
const initalState = {
    data: null,
    error: null
}

// Reducer handles state transitions
function fetchReducer(state, action) {
    switch(action.type) {
        case "FETCH_START":
            return { ...state, data:null, error: null };
        case "FETCH_SUCCESS":
            return { ...state,  data: action.payload,  error: null };
        case "FETCH_ERROR":
            return  { ...state, data: null, error: action.payload };
        default:
            return state;
    }

}

// custom hooks to fetch external url using a reducer to manage all states as single state comined 
function useFetchReducer(url) {
    
    // useReducer replaces multiple useState
    const [state, dispatch] = useReducer(fetchReducer, initalState);



    //Run this effect: 
    // - once on first render
    // - again everytime 'currency' changes (as currency is in dependency array)
    useEffect(() => {
        
        if(!url) return;

        if(url) {
            //Initial error message set as default at every changes
            // setError('Ok');

            //ignore flag (starts false = safe to update state)
            let ignore = false;

            //  creating asynchoronous function to fetch data from external api's
            async function fetchData() {
                //start fetching (set loading)
                dispatch({type: "FETCH_START"});

                try{
                    // use alternative url 'https://api.coinbase.com' to call api for the selected currency
                    const res = await fetch(url);

                    // if request failed throw an error
                    if(!res.ok) {
                        // setError(`Request Failed: ${res.status}`)
                        throw new Error(`Request Failed: ${res.status}`)
                    }

                    const jsonData  = await res.json(); // Waiting response and convert it to JSON data

                    // Only update state if still "Active"
                    if(!ignore) {
                        dispatch({type: "FETCH_SUCCESS", payload: jsonData.data});// keeping original behavior: store `jsonData.data`
                    }

                }catch(error) {
                    // Only update state if still "Active"
                    if(!ignore) {
                        dispatch({type: "FETCH_ERROR", payload: error.message || "Something went wrong"});
                    }
                    
                    
                }
            }

            //calling function
            fetchData();

            // Cleanup: if url changes or component unmounts
            return () => {
                ignore = true;
            };
        }
    }, [url]);

    //returning with two value to the point where it has been called
    return state; // return {data: state.data, error: state.error};
    

}

export default useFetchReducer;