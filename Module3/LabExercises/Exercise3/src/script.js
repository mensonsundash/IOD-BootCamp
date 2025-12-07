let question_1 = `
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.
`;
let answer_1 = `
// function that takes start and increment with default value if argument not provided
function makeCounter(startFrom = 0, incrementBy = 1) {
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
    let currentCount = startFrom; //start from the given value
  return function () {
    // c) Modify makeCounter to take another argument incrementBy, which specifies how
    // much each call to counter() should increase the counter value by.
    currentCount += incrementBy; // increase by custom inccrement
     console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(0, 1); // b) given startFrom //c) 1,2,3 ...
counter1(); // 1
counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if
//Yes, its unique Because each call to makeCounter() creates a new currentCount variable, counter1 and counter2 don’t affect each other.
let counter2 = makeCounter(10, 2); // b) given startFrom //c) 12, 14, 16 ...
counter2(); //a,b) 1 (counter2 starts from 0 → now 1) //c) 12
counter2(); //a,b) 2 (counter2 currentCount  = 2) //c) 14

`;
document.getElementById('question_1').innerHTML = question_1;
document.getElementById('answer_1').innerHTML = answer_1;

let question_2 = `
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
`;
let answer_2 = `
// function delayMsg(msg)
// {
//     console.log(\`This message will be printed after a delay: $\{msg}\`)
// }

// b) Rewrite delayMsg as an arrow function
const delayMsg = msg => {
    console.log(\`This message will be printed after a delay: $\{msg}\`);
};
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// a) Line "#4: Not delayed at all" test msg run immediately:no delay at all and it is synchronous
// then setTimeout(.., 0) // even 0ms timeout never executes before synchornous code as it added to event queue
// then setTimeout(.., 20)
// then setTimeout(.., 100)
delayMsg('#4: Not delayed at all');
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
let timerId = setTimeout(delayMsg, 12000, '#5: Delayed by 12s');
// d) Use clearTimeout to prevent the fifth test from printing at all.
clearTimeout(timerId); //prevent #5 from printing
`;
document.getElementById('question_2').innerHTML = question_2;
document.getElementById('answer_2').innerHTML = answer_2;

let question_3 = `
3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.
`;
let answer_3 = `
// a) Create a debounce(func) decorator, 
function debounce(func, ms) {// b) Extend the debounce decorator function to take a second argument ms
    let timeOutId;

    // c) argument passed in callback function
    return function(...args) {
        // cancel any previous scheduled function call
        clearTimeout(timeOutId)

        // schedule a new call 1000s from now
        timeOutId = setTimeout(() => {
            func(args); //calling original function
        }, ms);
    }

}

//original function
function printMe(msg) { // c) argument to take the message
    console.log(\`printing debounced message: $\{msg}\`);
}

//Decorate it
printMe = debounce(printMe, 1000); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// When you start passing argument now you can't call printMe without function reference
// typeError fixing: need to pass a function reference to setTimeout, not the result of calling the function.
// passing a function that later calls printMe
setTimeout( () => printMe('#1 at 100ms'), 100);// schedules func at 1100ms
setTimeout( () => printMe('#2 at 200ms'), 200);// cancel previous, reschedules at 1200ms
setTimeout( () => printMe('#3 at 300ms'), 300);// cancel previous, reschedules at 1300ms

// only the last one will print
//result: printing debounced message #3 at 300ms
`;
document.getElementById('question_3').innerHTML = question_3;
document.getElementById('answer_3').innerHTML = answer_3;

let question_4 = `
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.
`;
let answer_4 = `
// a) Write a function printFibonacci() using setInterval that outputs a number in every second
function printFibonacci(limit) { // c) Extend one of the above functions to accept a limit argument
    let a = 1; //first fibonacci number
    let b = 1; //second fibonacci number
    let count = 0; //counter to match limit

    const timerID = setInterval(() => {
        console.log(a); //current number

        // c) Extend one of the above functions to accept a limit argument
        if(count >=limit) { 
            clearInterval(timerID); 
            return;
        }

        const next = a + b; //Fibonacci sequence pattern
        a = b;
        b =next;

        count++;
    }, 1000);
}

printFibonacci(7);

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
function printFibonacciTimeouts() {
    let a = 1;
    let b = 1;

    function nestedCall() {
        console.log(a);
        const next = a + b; //Fibonacci sequence pattern
        a = b;
        b = next;

        // schedule the next call after 1 second
        setTimeout(nestedCall, 1000);
    }

    // start nested function call
    nestedCall();
}
printFibonacciTimeouts();
`;
document.getElementById('question_4').innerHTML = question_4;
document.getElementById('answer_4').innerHTML = answer_4;

let question_5 = `
5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?
a) Fix the setTimeout call by wrapping the call to car.description() inside a
function
b) Change the year for the car by creating a clone of the original and overriding it
c) Does the delayed description() call use the original values or the new values from
b)? Why?
d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function
e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)

`;
let answer_5 = `
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(\`This car is a $\{this.make} $\{this.model} from $\{this.year}\`);
  },
};
car.description(); //works
// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
// setTimeout(() => car.description(), 200); //fails

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
const boundDescription = car.description.bind(car);
setTimeout( boundDescription ,200 );// works without rapper 'no need () description()';

// b) Change the year by cloning and overriding
let newCar = {
    ...car, //spread syntac will create new object.
    year: 2020, //override yeyar
    make: 'Ferrari' // e) Change another property of the car by creating a clone and overriding it
}

newCar.description(); ////d) This car is a Ferrari 911 from 2020
// -  boundDescription is bound to the original car object, not the newerCar clone.
// -  Cloning car into newerCar does not change the original car object.
// -  bind locks in the this value to that exact object reference.

//// c)  Does the delayed description() call use the original values or the new values from b)?
// car.description(); //still uses car not newCar.
// - The timeout callback explicitly calls car.description().
// - It doesn’t know or care about newCar.
// - Cloning car to newCar does not change car itself, it just creates another object.
`;
document.getElementById('question_5').innerHTML = question_5;
document.getElementById('answer_5').innerHTML = answer_5;

let question_6 = `
6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters
b) Use apply to improve your solution so that delayed functions can take any number of
parameters
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.
`;
let answer_6 = ``;
document.getElementById('question_6').innerHTML = question_6;
document.getElementById('answer_6').innerHTML = answer_6;

let question_7 = `
7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.
b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.
`;
let answer_7 = ``;
document.getElementById('question_7').innerHTML = question_7;
document.getElementById('answer_7').innerHTML = answer_7;

let question_8 = `
8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.
a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string
c) Extend the decorator function to validate as strings all arguments passed to fn
d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments
`;
let answer_8 = ``;
document.getElementById('question_8').innerHTML = question_8;
document.getElementById('answer_8').innerHTML = answer_8;

let question_9 = `
9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value
`;
let answer_9 = ``;
document.getElementById('question_9').innerHTML = question_9;
document.getElementById('answer_9').innerHTML = answer_9;

let question_10 = `
10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results.
`;
let answer_10 = ``;
document.getElementById('question_10').innerHTML = question_10;
document.getElementById('answer_10').innerHTML = answer_10;

