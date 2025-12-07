/**
 * general start() function to prepare pizza
 * with async wat 1 sec
 */
async function start(){
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Started preparing pizza ...');
        }, 1000);
    });

    let result  = await promise;
    
    console.log(result);
}


/**
 * expressiom base() function to made pizza base
 * with async wait 2 sec
 */
let base = async function() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Made the base')
        }, 2000);
    });
    
    let result  = await promise;

    console.log(result);
}

/**
 * arrow function addSauceCheese() to add sauce and cheese
 * with async wait 3 sec
 */
let addSauceCheese = async () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Added the sauce and cheese');        
        }, 3000);
    });

    let result = await promise;

    console.log(result);
}

/**
 * arrow function addToppings() to add toppings
 * with async wait 4 sec
 */
let addToppings =  async () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Added the pizza toppings");
        }, 4000);
    });

    let result = await promise;
    console.log(result);
}

/**
 * expression function cookPizza() to cook the pizza
 * with async wait 5 sec
 */

let cookPizza = async function() {
    let promise = new Promise((resolve) => {

        setTimeout(() => {
            resolve('Cooked the pizza')
        }, 5000);
        
    });

    let result = await promise;


    console.log(result);
}


/**
 * general function ready() to finish and make pizza ready to eat
 * with async wait 6 sec
 */
async function ready(){
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pizza is ready!!!');
        }, 6000);   
        
    });

    let result = await promise;

    console.log(result);
}


// Function call

base();

addSauceCheese()

addToppings();

start();



cookPizza();

ready();


// ready() {
// setTimeout(() => {
//     ready();
// }, 6000); 
//     console.log('Pizza is ready!!!');    
// }





// // Method:2 
// async function pizzaMaking(value, timeout){
//     let promise = new Promise((resolve) =>{
//         setTimeout(() => {
//            resolve(value) 
//         }, timeout);
//     });

//     let result = await promise;
//     console.log(result);
// }






// pizzaMaking('• Started preparing pizza ...', 1000);
// pizzaMaking('• Made the base', 2000);
// pizzaMaking('• Added the sauce and cheese', 3000);
// pizzaMaking('• Added the pizza toppings', 4000);
// pizzaMaking('• Cooked the pizza', 5000);
// pizzaMaking('• Pizza is ready', 6000);