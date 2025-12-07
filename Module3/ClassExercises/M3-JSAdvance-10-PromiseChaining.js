let start = 10;
new Promise((resolve, reject) => {
resolve(start); // resolve promise successfully with value of 10
}).then((result) => { // when resolve is called, it triggers .then()
console.log(result); return result + start; // values returned from .then() are also promises
}).then((result) => { // so we can chain them together
console.log(result); return result + start; // increasing result by 10 each time
}).then((result) => { // we can continue to chain them together
console.log(result); return result + start; // increasing result by 10 each time
});
// prints 10, 20, 30