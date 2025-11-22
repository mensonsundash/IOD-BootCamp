/**
 * 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
 */
/*
let a = 2, b = 3;
let result = `${a} + ${b} is` ;
// Before Change
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// //after ternary/condition operator
result += a + b < 10 ? 'less than 10' : 'greater than 10';

console.log(result)
*/

/**
 * 5. Rewrite the following function using: 
 * a) function expression syntax, and 
 * b) arrow function syntax. Test each version to make sure they work the same.
 */
/*
function getGreeting(name) {
return 'Hello ' + name + '!';
}

//function expression syntax
let getGreetinged = function (name) {
    return 'Hello ' + name + '!';
}
//arrow function syntax
let getGreetings = name => 'Hello ' + name + '!'; //(name) => 'Hello ' + name + '!';

console.log(getGreeting("Robin")); //Hello Robin!
console.log(getGreetinged("Brayn")); //Hello Robined!
console.log(getGreetings("Hitch")); //Hello Hitch!
*/


/**
 * 6. 
 * a) Complete the inigo object by adding a lastName property and including it in the greeting. 
 * b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. 
 * HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
 * c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
 */
/*
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: person => person.numFingers === 6 ? "You killed my father. Prepare to die." : "Nice to meet you.",
};
inigo.lastName ="Montoya"
inigo.greeting(westley);
inigo.greeting(rugen);

*/

/**
 * 7. The following object represents a basketball game and keeps track of the score as the game progresses. 
 * a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works 
 * b) Add a new method to print the full time final score 
 * c) Add a new object property to keep track of the number of fouls and a method to increment it, 
 * similar but separate to the score. 
 * Include the foul count in the half time and full time console messages 
 * d) Test your object by chaining all the method calls together in different combinations.
 */
/*        
const basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    this.score++;
    // a) chaining to return the current object 
    return this;
  },
  basket() {
    this.score += 2;
    // a) chaining to return the current object 
    return this;
  },
  threePointer() {
    this.score += 3;
    // a) chaining to return the current object 
    return this;
  },
    // c) Add a new object property to keep track of the number of fouls
  fouls() {
    this.foul++;
    return this;
  },
  halfTime() {
    // console.log("Halftime score is " + this.score);
    console.log(`
        It's Halftime 
             Score : ${this.score},
             Foul: ${this.foul}
        `);
    return this;
  },
  // b) Add a new method to print the full time final score 
  fullTime() {
    console.log(`
        It's Fulltime 
             Score : ${this.score},
             Foul: ${this.foul}
        `);
  },
};
//modify each of the above object methods to enable function chaining as below:
// d) Test your object by chaining all the method calls together in different combinations.
basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .fouls()
    .threePointer()
  .halfTime()
    .freeThrow()
    .basket()
    .basket()
    .fouls()
    .fouls()
    .threePointer()
    .fouls()
  .fullTime();

  
//    RESULT:
//        It's Halftime 
//              Score : 9,
//              Foul: 1
        

//         It's Fulltime 
//              Score : 17,
//              Foul: 4
*/


/**
 * 8. The object below represents a single city.
    a) Write a function that takes an object as an argument and uses a for...in loop to access
    and print to the console each of those object properties and their values. Test it using
    the sydney object below.
    b) Create a new object for a different city with different properties and call your function
    again with the new object.
 */
/*
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

// b) creating new object
const Adelaide = {
    name: 'Adelaide',
    population: 1_387_290,
    state: 'SA',
    founded: '28 December 1836',
    timezone: 'Australia/Adelaide',
    nickName: 'City of Churches',
    originalName: 'Tarntanyya'
};

// a) Function with 'Obj' parameter to iterate (for...in) of object argument
function ObjFunction(Obj) {
    for(let objKey in Obj) {
        console.log(`${objKey}: ${Obj[objKey]}`)
    }
}
// a) testing with sydney as an argument
ObjFunction(sydney);
// b) calling with new object argument
ObjFunction(Adelaide);
    // RESULT:
        // name: Sydney
        // population: 5121000
        // state: NSW
        // founded: 26 January 1788
        // timezone: Australia/Sydney

        // name: Adelaide
        // population: 1387290
        // state: SA
        // founded: 28 December 1836
        // timezone: Australia/Adelaide
        // nickName: City of Churches
        // originalName: Tarntanyya
*/


/**
 * 9. Use the following variables to understand how JavaScript stores objects by reference.
        a) Create a new moreSports variable equal to teamSports and add some new sport
        values to it (using push and unshift)
        b) Create a new dog2 variable equal to dog1 and give it a new value
        c) Create a new cat2 variable equal to cat1 and change its name property
        d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
        changed? Why?
        e) Change the way the moreSports and cat2 variables are created to ensure the
        originals remain independent
 */
/*
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) create a variable and add using push and unshift
// let moreSports = teamSports;// a) (moreSports)-> point to same array (teamSports) in memory
let moreSports = [...teamSports];// e) teamSports is now spread syntaxed so moreSports will create new array with teamSports
moreSports.push('ZavelThrow');//push (insert at end of array)
moreSports.unshift('Football');//unshift (insert at beginning of array)

// b) primitive referencing to new variable 
let dog2 = dog1;// copied only dog1 value to dog2 after that both variable are independent
dog2 = "Lorenx"

// c) object referencing to new variable 
// let cat2 = cat1;// a) (cat2)-> point to same object (cat1) memory like array
let cat2 = {...cat1};// e) cat1 is now spread syntaxed so cat2 will create new object with cat1
cat2.name = 'Husky';
//ANS==>: as in object referenced values: both shared same object
// It will reference to  original and modify to that one shared object in memory 

// d) printing teamsports, dog1, and cat1 
console.log(teamSports);//---> ['Football', 'Hockey', 'Cricket', 'Volleyball', 'ZavelThrow']
// ANS==>: as in Arrays Referenc values: both shared same array: 
// so above modification happen in one shared array and changes seen in both.
console.log(dog1)//---> 'Bingo'
//ANS==>: as in primitive data types it will not change its original value
console.log(cat1)//---> { name: 'Husky', breed: 'Siberian' }
// ANS==>: as in object Referenc values: both shared same object: 
// so above modification happen in one shared object and changes seen in both.

*/

/**
 * 10. The following constructor function creates a new Person object with the given name and
    age values.
    a) Create a new person using the constructor function and store it in a variable
    b) Create a second person using different name and age values and store it in a separate
    variable
    c) Print out the properties of each person object to the console
    d) Rewrite the constructor function as a class called PersonClass and use it to create a
    third person using different name and age values. Print it to the console as well.
    e) Add a canDrive method to both the constructor function and the class that returns true
    if the person is old enough to drive.
 */

    //Constructor function
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        // e) Added a canDrive arrow method property to the constructor function that returns true if the person is old enough to drive.
        this.canDrive = () => {
          if(this.age < 18) {
            return false;
          } 
          return true;
        }
    }



    let firstPerson = new Person("Haul", 17); // a) create new person and store it in a variable
    let secondPerson = new Person("Cortel", 36);// b) create second person and store it in a variable

    // c) print out each person object with properties
    console.log(firstPerson.canDrive())
    console.log(secondPerson.canDrive())

    // d) rewrite function as a Class
    class PersonClass {
      constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true;
      }

      // e) Added a canDrive method to the class that returns true if the person is old enough to drive.
      canDrive() {
        if(this.age < 18){
          return false;
        }
        return true;
      }

    }

    let thirdPerson = new PersonClass("Bison", 16);

    console.log(thirdPerson.canDrive())