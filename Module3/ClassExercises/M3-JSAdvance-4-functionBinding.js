// const user = {
// name: 'John',
// sayHi() {
// console.log(`Hi, ${this.name}`)
// }
// }
// user.sayHi // called directly, works! Hi, John
// setTimeout(user.sayHi(), 1000) // passed as reference, fails! Hi, undefined
// let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
// let rabbit1 = { jumps: true };
// Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

// let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
// jumps: { // name of custom 'own' property for rabbit object
// value: true, // property descriptor to set the property value
// enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
// }
// });
// console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
// console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
// for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
// for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones



String.prototype.show = function() { // creates new 'show' function on built-in String prototype
  console.log(this);
};

const arr = "" // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype