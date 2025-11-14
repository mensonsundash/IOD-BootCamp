// 1. What are the results of these expressions? (answer first, then use console.log() to check)
let question_1 = `1. What are the results of these expressions? <em>(answer first, then use console.log() to check)</em>`;
let answer_1 = `
//As processor starts from LEFT to RIGHT 
"" + 1 + 0;//Result: "10" ; String Concatenation It concatinate as implicit conversion first is string +
"" - 1 + 0;//Result: -1 ; It contains First string but it has substract operator so after that it will start numeric caclulation
true + false;//Result: 1 ; numeric context => as true=1 + false=0
!true; //Result: false ; Negates of true = false
6 / "3";//Result: 2 ; except + operator others do mathematical operations with implicit conversion
"2" * "3";//Result: 6 ; Implicit conversion and math operations
4 + 5 + "px";//Result: "9px" ; as first do math and then concat with string result whole as string
"$" + 4 + 5;//Result: "$45"; First precedence with string so all after that is string concatenation
"4" - 2;//Result: 2 ; as except '+' operators other's does math operations (Numeric conversion)
"4px" - 2;//Result: NaN ; as except '+' operators other's does math operations but can't convert to valid number with string
" -9 " + 5;//Result: -9 5 ; implicit conversion to string
" -9 " - 5;//Result: -14 ;  resulting math operations with numeric conversion
null + 1;//Result: 1 ; numeric conversion context null is 0
undefined + 1;//Result: NaN ; numeric conversion context Undefined is Nan
undefined == null;//Result: true ; in loose equality both are equal to eachother
undefined === null;//Result: false ; in strict equality both are different types
" \\t \\n" - 2;//Result: -2 ; numeric conversion as white spaces is 0
`;
document.getElementById('question_1').innerHTML = question_1;
document.getElementById('answer_1').innerHTML = answer_1;

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let question_2 = "2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?"
let answer_2 = `
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
//Javascript forces numeric conversion to all operators except (+) and comaprision operators (< > =)

let addition = three + four //Incorrect Result: "34" ; string conversion and 3 and 4 as string concatenation
let multiplication = three * four //Correct Result: 12 ; numeric conversion so does a (*) math operation 
let division = three / four //Correct Result: 0.75 ; numeric conversion so does a (/) math operations
let subtraction = three - four //Correct Result: -1 ; numeric conversion so does a (-) math operations
let lessThan1 = three < four //Incorrect Result: true ; string order comparision not numeric so 3 is less than 4
let lessThan2 = thirty < four //Incorrect Result: true ; string order comparision so "30" is less than "4" as "30" is check with first digit "3"
`;
document.getElementById('question_2').innerHTML = question_2;
document.getElementById('answer_2').innerHTML = answer_2;

// 3. Which of the following console.log messages will print? Why?
let question_3 = `3. Which of the following console.log messages will print? Why?`;
let answer_3 = `
if (0) console.log('#1 zero is true') //Not Print Result: False as 0 is false statement in condition
if ("0") console.log('#2 zero is true') //Print Result: True as "0" non empty string,so true
if (null) console.log('null is true') //Not Print Result: null as no value is false statement in condition
if (-1) console.log('negative is true') //Print Result: True non-zero negative number is true 
if (1) console.log('positive is true') //Print Result: True non-zero postive number is true 
`;

document.getElementById('question_3').innerHTML = question_3;
document.getElementById('answer_3').innerHTML = answer_3;

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let question_4 = `4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?`;
let answer_4 = `
let a = 2, b = 3;
let result = \`$ {a} + $ {b} is\` ;
// Before Change
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

//after ternary/condition operator
result += a + b < 10 ? 'less than 10' : 'greater than 10';
console.log(result) // 2 + 3 isless than 10
//result += (Concatinate result initial value with the result that came after condition passed)
`;
document.getElementById('question_4').innerHTML = question_4;
document.getElementById('answer_4').innerHTML = answer_4;

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
let question_5 = `5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.`;
let answer_5 = `
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
console.log(getGreetinged("Brayn")); //Hello Brayn!
console.log(getGreetings("Hitch")); //Hello Hitch!
`;
document.getElementById('question_5').innerHTML = question_5;
document.getElementById('answer_5').innerHTML = answer_5;


/**
 * 6. a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
 */
let question_6 = `
6. a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
`;
let answer_6 = `
const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
greeting(person) {
let greeting = \`Hello $ {person.name}, my name is $ {this.firstName}. \`;
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase(person) {
return 'Nice to meet you.';
}
}
inigo.greeting(westley)
inigo.greeting(rugen)
`;
document.getElementById('question_6').innerHTML = question_6;
document.getElementById('answer_6').innerHTML = answer_6;

/**
 * 7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.
 */
let question_7 = `
7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.
`;
let answer_7 = `
const basketballGame = {
score: 0,
freeThrow() {
this.score++;
},
basket() {
this.score += 2;
},
threePointer() {
this.score += 3;
},
halfTime() {
console.log('Halftime score is '+this.score);
}
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
`;
document.getElementById('question_7').innerHTML = question_7;
document.getElementById('answer_7').innerHTML = answer_7;

/**
 * 8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.
 */
let question_8 = `
8. The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.
`;
let answer_8 = `
const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}
`;
document.getElementById('question_8').innerHTML = question_8;
document.getElementById('answer_8').innerHTML = answer_8;

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
let question_9 = `
9. Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent
`;
let answer_9 = `
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
`;
document.getElementById('question_9').innerHTML = question_9;
document.getElementById('answer_9').innerHTML = answer_9;

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
let question_10 = `
10. The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.
`;
let answer_10 = `
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
}
`;
document.getElementById('question_10').innerHTML = question_10;
document.getElementById('answer_10').innerHTML = answer_10;
