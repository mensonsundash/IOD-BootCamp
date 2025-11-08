/**
 * Functions
 */

/* *********************** Functions Starts *********************** 
 * 
 */

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}
console.log( checkAge(21) ) // adult
console.log( checkAge(13) ) // non-adult

//Testing function as function syntax cannot access before initialization
HelloFunction();//it will work that function is accesible before initialization
sayHello("menson");//it will not work fail
// Function Named Expression
const sample = function () {
  console.log("Sample Function ");
};

const sayHello = function (name) {
  console.log("Sample Function " + name);
};

// sayHello("Menson");

function HelloFunction(){
  console.log("helloo")
}

//arrow functions
const sayHelloArrow = () => {
  console.log("Hello arrow function");
};

sayHelloArrow();

const sayHi = (name) => {
  console.log("Hello, " + name);
};

sayHi("menson");

const Add = (x, y) => {
  return x + y;
};

const Substract = (x, y) => x-y;


//

/* *********************** Functions end ***********************/