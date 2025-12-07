// const promise1 = new Promise((resolve, reject) => {
//   let number = Math.floor(Math.random() * 50);
//   console.log(number); 
//   if(number %2){
//     resolve(number);
//   }else{
//     reject(number);
//   }
// })
// .then((result) => console.log(`Successful outcome: ${result}`))
// .catch((error) => console.log(`Failure or unsuccessful: ${error}`))
// .finally(() => console.log("Promise fulfilled"));



// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
else setTimeout( () => reject('Random number too low'), 250 ) // failure
})

promise // consume the promise by responding to outcomes when they happen
.finally( () => console.log('Wait is over, promise has settled.') ) // always prints
.then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
.catch( (error) => console.log('Error! ' + error ) ) // prints reject msg