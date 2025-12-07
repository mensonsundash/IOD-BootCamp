
let promise = fetch('https://fakestoreapi.com/products') // request data from this server

// when it completes, access the JSON from the HTTP response sent by resolved

promise
.then(response => response.json()) // .json() also returns a promise
.then(json => console.log(json)) // log the returned JSON to the browser console
.catch(error => console.error(error)) // if there was an error, log that too
