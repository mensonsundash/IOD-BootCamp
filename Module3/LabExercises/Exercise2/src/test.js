/**
 * 1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.
*/
/*
function capitalize(str){
    let result = '';
    let iterableArrayString = str.split(" ");//spliting string into array with space
    
    //Method:1 looping arrays
    // for(let word of iterableArrayString) {
    //     let firstChar = word.charAt(0);//getting first character 
    //     let convertToUpperCase = firstChar.toUpperCase();//converting 1st character to uppercase
    //     let removeFirstChar = word.slice(1);//remove 1st character from main word

    //     let newWord = convertToUpperCase + removeFirstChar;//join uppercase Character to word without 1st character
    //     result += newWord + " ";//concat all words with space
        
    // }
    // return result.trim();//remove first and last unwanted whitespace

    //Method:2 using array map iteration
    return iterableArrayString
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ").trim();
}

// console.log(capitalize("hello there is something"));
console.log(capitalize("hi, my Name is something. wHere i WILL stay in the Loop."));

*/

/**
 * 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.
 */
/*
function truncate(str, max) {

    // // Method1: simple if else condition
    // if(str.length > max) {
    //     return str.substring(0,max) + '...';
    // }else{
    //     return str;
    // }

    //Method:2 with conditional operators
    return str.length > max ? str.substring(0,max) + '...' : str;
}

console.log(truncate("There is most of the numbers.", 12));
*/

/**
 * 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
 */
/*
const animals = ['Tiger', 'Giraffe']

//a) Add 2 new values to the end
animals.push('Dog', 'Duck');
// b) Add 2 new values to the beginning
animals.unshift('Cat', 'Cheeta')
// c) Sort the values alphabetically
animals.sort();//in string sort method does alphabetically ascending order sorting

console.log("Original Array: ", animals); // [ 'Cat', 'Cheeta', 'Dog', 'Duck', 'Giraffe', 'Tiger' ]

// // :::::::: MISTAKELY -> but learned more. :::::::: 
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
//  - Mitakely understand question as add new array value to middle of original array 
//  - so changed function name as addToMiddleAnimal
//  - addToMiddleAnimal will addNew array at middel
//  
// function addToMiddleAnimal(newValue) {
//     // console.log("Original Array: ",animals)//[ 'Fox', 'Giraffe', 'Hyena', 'Lion', 'Panda', 'Tiger' ]
//     if(!Array.isArray(newValue)){
//         console.log('Your input value should be in array.')
//     return;
//     }
    
//     let endPos= Math.floor(animals.length/2); //gives you floor value of half size of your array
    
//     //Splice will cut and give new array animals array from the endpos value: Remaining array
//     //and also return the removed array from original animals array
//     //spread operator(...newValue) will extract newValue array as extracted values
    
//     let removedArray = animals.splice(0, endPos, ...newValue);
    
//     //animals will be new array with added newValues to remaining part of array after splice
//     let combineArray = removedArray.concat(animals);
    
//     console.log("Center Position: ", endPos);//3
//     console.log("Removed Array: ", removedArray);// [ 'Cat', 'Cheeta', 'Dog' ]
//     console.log("Remaining Array: ", animals);// remaining Arra:  [ 'Chimpanze', 'Cow', 'Camel', 'Duck', 'Giraffe', 'Tiger' ]
//     console.log("Combined Array: ", combineArray);//  [ 'Cat', 'Cheeta', 'Dog', 'Chimpanze', 'Cow', 'Camel', 'Duck', 'Giraffe', 'Tiger' ]
// return combineArray;
// }
// console.log(addToMiddleAnimal(['Chimpanze', 'Cow', "Camel"]));//[ 'Cat', 'Cheeta', 'Dog', 'Chimpanze', 'Cow', 'Camel', 'Duck', 'Giraffe', 'Tiger' ]


// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
function replaceMiddleAnimal(newValue){
    let midPos =Math.floor(animals.length/2);//gives floor value of half length of original array
    animals[midPos] = newValue; //replacing new value to found middle position
    return animals; //return new converted array
}
console.log(replaceMiddleAnimal('Chimpanze'));//[ 'Cat', 'Cheeta', 'Dog', 'Chimpanze', 'Giraffe', 'Tiger' ]

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
    let matchingWord = beginsWith.toLowerCase();
    //return new array with filtered statements
    return animals.filter( animal => {
        let lowerCaseAnimal = animal.toLowerCase(); //converting each value into lowercase
        return lowerCaseAnimal.startsWith(matchingWord); //
    });
}
console.log(findMatchingAnimals('c'));//[ 'Cat', 'Cheeta', 'Chimpanze' ]
console.log(findMatchingAnimals('ch'));//[ 'Cheeta', 'Chimpanze' ]
*/

/**  4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
 */
/*
// a) Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
function camelCase(cssProp) {
    console.log(cssProp);//margin-left
    let splitString = cssProp.split("-");//spliting string into array with seprator as (-) character
    let firstWord = splitString[0].toLowerCase();//getting only first word and converting it to lowercase
    let result = '';//vairable declaration with empty string value 
    
    // //Main basic tactics
    // let secondWord = splitString[1].toLowerCase();//just to confirm and generalize every word is lowercase
    // let firstCharToUpper = secondWord.charAt(0).toUpperCase();//L : converting 1st character to uppercase from second word
    // let removedFristChar = secondWord.slice(1);// eft: remove first character from second word
    // let newSecondWord = firstCharToUpper + removedFristChar; //Left
    // let finalWord = firstWord + newSecondWord;//margin + Left

    // // b) Create variants of the camelCase function that use different types of for loops, and
    // // c) with and without the conditional operator.
    // //general for loop
    // for(let i = 0; i < splitString.length; i++){
        
    //     if(i !== 0) {
    //         result += capitalizeEachWord(splitString[i]);//function call to convert and add all word with first character upppercase
    //     }
    // }

    // //for of ... loop
    // for(let word of splitString) {
    //     if(word !== firstWord) {//checking first word in not included
    //         result += capitalizeEachWord(word);//function call to convert and add all word with first character upppercase
    //     }
    // }

    // forEach array iteration with key value pair
    splitString.forEach((value, key) => {
        if(key !== 0){//checking first word in not included
            result += capitalizeEachWord(value); //function call to convert and add all word with first character upppercase
        }   
    });

    let finalWord = firstWord + result;// margin + LeftBottom


    return finalWord;
}

//function to convert each word first character into Uppercase and join together and return whole string
function capitalizeEachWord(str){
    return str.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ").trim();
}

console.log(camelCase('margin-left-bottom'));//MarginLeftBottom
*/

/**
 * 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:

We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:

a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:
*/
/*
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Explain why the above code returns the wrong answer
// as .tofixed(2) method converts a number to a string
// so instead of addition it just concatenate with two numeric string
// console.log(fixedTwenty + fixedTen) //Result: 0.200.10

// // b) arrow function that adds the two decimal numbers float1 and float2 and returns the correct float result.
// let currencyAddition = (float1, float2) => {
//     let sum = float1 + float2;
//     let convert2Decimal = sum.toFixed(2);// converts number into 2 point decimal string value
//     return parseFloat(convert2Decimal);//parsing number from string
// }

// console.log(currencyAddition(0.2, 0.1));//0.3
// console.log(currencyAddition(0.52, 0.63));//1.15

// c) 
function currencyOperation (float1, float2, operation, numDecimals) {
    
    let result;
    switch (operation) {
        case "+":
            result  = float1 + float2;
            break;
        case "-":
            result = float1 - float2;
            break;
        case "*":
            result = float1 * float2;
            
            break;
        case "/":
            if(float2 ===0) {
                throw new Error('Cannot divide by zero.');
            }
            result = float1 / float2;
            break;
    
        default:
            throw new Error("Unsupported operation. Use '+', '-', '*', or '/' ");
            break;
    }

    // d) toFixed(numDecimals) to give result as per decimal count provided
    return result.toFixed(numDecimals);//to get all decimal fixed to decimal we need string fixed conversion methods only
}

console.log(currencyOperation(0.60,0.20, "+", 5));// 0.80000
console.log(currencyOperation(0.60,0.20, "-", 2));// 0.40
console.log(currencyOperation(0.60,0.20, "*", 6));// 0.120000
console.log(currencyOperation(0.60,0.20, "/", 7));// 3.0000000
*/

/**
 6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.
 */
/*
function unique(duplicatesArray) {
    // // method1: using reduce method
    // return duplicatesArray.reduce( (acc, currentVal, index, array) => {
    //     // checking if this value is already in the acc array (acc = accumulator)
    //     // If not only then it will push into acc array
    //     if(!acc.includes(currentVal)) {
    //         acc.push(currentVal);//if the value is unique then add into acc array
    //     }
    //     return acc;
    // }, []);

    //method2: set method always stores unique values duplicates always removed automatically
    return [...new Set(duplicatesArray)];
    
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
*/

/*
 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.
a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. 
 */
/*
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) function to find book by its id
function getBookTitle(bookId) {
    let booksById = books.find(book => book.id === bookId);
    return booksById ? booksById.title : "Book not found";
}

// b) function to find books writeen before 1950 by filter
function getOldBooks(oldDate) {
    return books.filter(book=> book.year < oldDate);
}

// c) function that map to add new genre property with value classic
function addGenre(genreVal) {
    return books.map( book => {
        return {
            ...book, //spread existing properties
            genre: genreVal // add new property
        }
    });
    
}

// d) function uses map and filter to return array of book titles for books written by authors initials
function getTitles(authorInitial) {
    return books
    .filter(book => book.author.includes(authorInitial)) // keep only book which author initial matches with filter
    .map( book => book.title); //take just their titles with map
}

// e) function uses find and foreach to get book with most recent publication date.
function latestBook() {
    let latestYear = books[0].year; //assuming the first array is higher
    books.forEach(book => {
           if(book.year > latestYear) latestYear = book.year;//update latestYear after iterating and comparing each year
    });

    //reuturn the book which year matches latest year 
    return books.find(book => book.year === latestYear);

}

console.log(getBookTitle(3)); // Output: "1984"
console.log(getBookTitle(5)); // Output: "The Catcher in the Rye"
console.log(getBookTitle(10)); // Output: "Book not found"

console.log(getOldBooks(1950)); //[...1925, ....1932] getting older years than 1950

console.log(addGenre('Classic'));//[... genre:'Classic', ...genre:'Classic', ....] added genre to each objects
console.log(getTitles('d'));// 'The Great Gatsby', 'Brave New World' ]
console.log(latestBook());// [... year:1960]  //result latest book
*/

/*
  The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.

a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book
 */
/*

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


// a)Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();
phoneBookDEF.set('Daryl', '0412389478');
phoneBookDEF.set('Elfy', '0436789900');
phoneBookDEF.set('Fizz', '047382901');

// b)Initialise the contents of phoneBookDEF by passing in an array of keys/values
// a sets of array with key value pairs in whole array
const phoneBookDEFContent = 
    [
        ['Daryl', '0412389478'],
        ['Elfy', '0436789900'],
        ['Fizz', '047382901']
    ]
const phoneBookDEF = new Map(phoneBookDEFContent);

// c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0437648493')


// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
function printPhoneBook(contacts) {
    contacts.forEach( (phone, name)=> {
        console.log(`${name} : ${phone}`);
    });
}
printPhoneBook(phoneBookABC); //resulting Annabelle : 0412312343 ...
printPhoneBook(phoneBookDEF); //Daryl : 0412312343  ...

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBooks = new Map([
    ...phoneBookABC,
    ...phoneBookDEF
]);

console.log(phoneBooks); //all name and phone within same map 


// f) Print out the full list of names in the combined phone book
// method:1
for(let phoneBook of phoneBooks) {
    console.log(phoneBook[0])
}

// method:2
phoneBooks.forEach((phone, name) => {
    console.log(name); 
})

// same for both methods RESULT: 
    // Annabelle
    // Barry
    // Caroline
    // Daryl
    // Elfy
    // Fizz

    */

    /*
    9. Given the below salaries object, perform the following tasks.
    a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
    b) Write a function topEarner(salaries) that calculates and returns the name of the person
    earning the highest salary
    */
/*
    let salaries = {
        "Timothy" : 35000,
        "David" : 25000,
        "Mary" : 55000,
        "Christina" : 75000,
        "James" : 43000
    };

    // a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
    function sumSalaries(salaries) {
        let total = 0;
        for (const person in salaries) {// object can be iterate using for in loop not for of(is for array)
            const salary = salaries[person]; //getting (person) as key of object which gives its value (salary)
            total += salary;
        }
    return total;
    }

    // b) Write a function topEarner(salaries) that calculates and returns the name of the person
    // earning the highest salary
    function topEarner(salaries) {
        let highestSalary = 0;//currentSalary
        let bestPerson = ''; //best person having highest of all

        for (const person in salaries) {
            
            // this condition check for each iteration and update highestSalary 
            // if the present person salary is higher than last value of highestSalary
            if(salaries[person] > highestSalary){ //untill it gives true it will update highestslary 
                highestSalary = salaries[person];// highestsalary to current true valued person salary
                bestPerson = person; // current person having highest salary
            }
        }
        return `${bestPerson} having $${highestSalary}`;
    }

   console.log(sumSalaries(salaries)); //Total: 233000
   console.log(topEarner(salaries)); //Christina having $75000
   */

   /*
   10.The following code uses the Date object to print the current time and the number of hours
    that have passed today so far. Extend the code to do the following:
    const today = new Date();
    console.log('Current time is ' + today.toLocaleTimeString())
    console.log(today.getHours() + ' hours have passed so far today')
    a) Print the total number of minutes that have passed so far today
    b) Print the total number of seconds that have passed so far today
    c) Calculate and print your age as: 'I am x years, y months and z days old'
    d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
    of days in between the two given dates.
   */

    /*
    const today = new Date();
    console.log('Current time is ' + today.toLocaleTimeString())
    console.log(today.getHours() + ' hours have passed so far today')
    
    // a) Print the total number of minutes that have passed so far today
    const minutesPassed = today.getHours() * 60 + today.getMinutes();//Gets the hours & minutes of a Date object, using local time.

    console.log(minutesPassed + ' minutes have passed so far today');


    // b) Print the total number of seconds that have passed so far today
    const secondsPassed =
    minutesPassed * 60 + today.getSeconds();//Gets the seconds of a Date object, using local time.

    console.log(secondsPassed + ' seconds have passed so far today');


    // c) Calculate and print your age as: 'I am x years, y months and z days old'
    
    //function to calculate my age
    function calculateAge(birthDate, todayDate = new Date()) {
       
        let years = todayDate.getFullYear() - birthDate.getFullYear();
        let months = todayDate.getMonth() - birthDate.getMonth();
        let days = todayDate.getDate() - birthDate.getDate();

        // If days are negative, borrow days from previous month
        if (days < 0) {
            const prevMonth = new Date(
            todayDate.getFullYear(),
            todayDate.getMonth(),
            0 // day 0 = last day of previous month
            );
            days += prevMonth.getDate(); // Add the number of days of the previous month to `days`
            months -= 1; // Since we borrowed a month, reduce months by 1
        }

        // If months are negative, borrow 1 year
        if (months < 0) {
            months += 12; // convert negative months to positive by adding 12
            years -= 1; // reduce one year because we "borrowed" it
        }

        return `I am ${years} years, ${months} months and ${days} days old`;
    }
    
    const myBirthday = new Date(1989, 9, 30); //yyyy, dd, mm: 1989 Oct 30 i.e oct 9 as jan starts with Jan-Dec(0-11)
    console.log(calculateAge(myBirthday, today)); //I am 36 years, 1 months and 6 days old
    


    // d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
    // of days in between the two given dates.
    // d) daysInBetween
    function daysInBetween(date1, date2) {
        const msPerDay = 1000 * 60 * 60 * 24; // mils * sec * min * hrs

        // Normalise both dates to "midnight" (00:00:00) in local time
        // This removes the time part so that
        //   2024-01-01 10:00 and 2024-01-01 23:00
        // count as the SAME day.
        const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        
        // Get the difference in milliseconds between the two dates.
        // Subtracting dates in JS gives the difference in ms.
        // We use Math.abs so order doesn't matter:
        //   daysInBetween(earlier, later) === daysInBetween(later, earlier)
        const diffMs = Math.abs(d2 - d1); // Math.abs Returns the absolute value of a number (the value without regard to whether it is positive or negative).
        
        // Convert milliseconds → days
        // Divide by msPerDay, then Math.floor to get a whole number of days.
        return Math.floor(diffMs / msPerDay);//
    }

    const d1 = new Date(2024, 0, 1);
    const d2 = new Date(2024, 0, 10);
    console.log('Days in between:', daysInBetween(d1, d2)); //result 9 is difference 

    */