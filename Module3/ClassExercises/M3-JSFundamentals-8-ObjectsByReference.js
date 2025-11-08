/**
 * Objects
 */

/* *********************** Objects By Reference Starts *********************** 
 * 
 */
// References
let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same
person3 = 'David';
console.log(person4); // still Carly, since person3 and person4 are string primitives and store


// shallow copy
const user = { name: 'Elliot', age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user) { // iterate over user properties
userClone[key] = user[key]; // re-create them in userClone
}
userClone.age = 30;
console.log(userClone); // { name: 'Elliot', age: 27 }
console.log(user); // { name: 'Elliot', age: 27 }

// Spread syntax
let userClone2 = {...user, age:50, country: "New Zealand"};
console.log(userClone2); // { name: 'Elliot', age: 27 }
//merging multiple objects
const vehicle = {make: "Toyota", model: "Camry"};
const mergedUser = {...user, ...vehicle, region:"South Pacific", age:55,sales: 500};
console.log(mergedUser)

// Deep Clone
let person = {
  name:"Holland",
  location:"New Zealand",
  address: {
    street: "21 Elliot",
    city: "Auckland",
    postcode: "0600",
  },
};
console.log(person);
const personTwo = {...person};
personTwo.address.city = "Wellington";
personTwo.name = "Hertx";
console.log(person);

// Object Methods
const userMethod = {
  name: "Bilbo Baggins",
  sing: function () {
    // method of user object
    console.log("Roads go ever ever on");
  },
  sing2() {
    // shorthand method syntax, does same as above
    console.log("Over rock and under tree");
  },
};
userMethod.sing(); // Roads go ever ever on
userMethod.sing2(); // Over rock and under tree

// Object Method with Context (this)
const userContext = {
name: 'Bilbo Baggins',
printGreeting() {
console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
}
}
// 'user' is before the dot, provides the context where 'this' comes from
userContext.printGreeting(); // Hello, I'm Bilbo Baggins


// Object This Behaviour
const userThisBehaviour = {
  name: "Bilbo Baggins",
  printThis() {
    console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  },
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
userThisBehaviour.printThis().printGreeting(); // methods chained together, works because printThis returns this


// OBject Constructor function
function UserConst(first, last) { // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
}

// we can create multiple users with different names
let user1 = new UserConst('Tim', 'Smith'); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

/* *********************** Objects By Reference end ***********************/