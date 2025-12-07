let promise1 = new Promise((resolve, reject) => {
    resolve(true);
});

let promise2 = new Promise((resolve, reject) => {
    reject(false);
});

let promise3 = new Promise((resolve, reject) => {

})

//Promise all
Promise.all([promise1, promise2])
.then((outcomes) => {
    console.log("Promise All");
    console.log(outcomes);
})
.catch((err) => {
    console.log("Promise Failed all");
    console.log(err);
});

//Promise all setteled
Promise.allSettled([promise1, promise2])
.then((outcomes) => { 
    console.log("Promise resolved settled");
    console.log(outcomes);
})
.catch((err) => {
    console.log("Promise reject settled");
    console.log(err)
});

//Promise race
Promise.race([promise2, promise3])
.then((outcomes) => { 
    console.log("Promise resolved settled");
    console.log(outcomes);
})
.catch((err) => {
    console.log("Promise reject settled");
    console.log(err)
});