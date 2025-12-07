// console.log("Sync1");
// console.log("Sync2");

// let promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 4000))
// .then((result) => console.log(`${result}`));

// await promise1;

// console.log("Sync3");
// console.log("Sync4");
// console.log("Sync5");
// console.log("Sync6");
// console.log("Sync7");
// console.log("Sync8");

// Asynchorous function
let waitForPromise = async () => {
    try{
        let promise1 = new Promise((resolve, reject) => 
            setTimeout(() => reject(10), 4000)
        )
        let result = await promise1;
        console.log(`Promise Resolve: ${result}`)
    }catch(err) {
        console.log(`Promise Reject: ${err}`);
    }
}

waitForPromise();