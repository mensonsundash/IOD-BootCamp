const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location

fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they both reference the same memory location

console.log('fruit at index 0: ' + fruits1[0]); // Apple - accessed using numeric index 0
console.log('fruit at index 1: ' + fruits1[1]); // Orange - accessed using numeric index 1


// if you use spread syntax then it will copy the array without any references to original one
// [...]

// slice array
const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
const endSlicedBack = sliceArray.slice(-4, -2) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']



//Splice aMehtoda
const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

//Copncat array
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

/**
 * IndexOf array methods
 */
const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-'];
let bIndex = marks.indexOf('B-');
let eIndex = marks.indexOf('E')
// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found

/**
 * lastIndexOf methods
 */
const marks1 = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks1.indexOf('B-')
let bIndexLast = marks1.lastIndexOf('B-')
console.log(marks1[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks1[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

/**
 * Join methods
 */
const elements = ['Wind', 'Water', 'Fire', 'Air']
console.log( elements.join() ) // Wind,Water,Fire,Air
console.log( elements.join(' ') ) // Wind Water Fire Air
console.log( elements.join('; ') ) // Wind; Water; Fire; Air


/**
 * Foreach methods
 */
const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
console.log(`#${index}: ${hobbit}`) // runs once for every item in array
});

/**
 * Find methods
 */
const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Men Jeans", price: 49.95, category: 'Pants' },
{ id: 4, title: "Denim Women Jeans", price: 49.95, category: 'Pants' },
{ id: 5, title: "Denim Kid Jeans", price: 49.95, category: 'Pants' }
];
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
let shirt = products.find(product => product.category == 'PN') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }


/**
 * Filters methods
 */
const products1 = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
{ id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products1.filter(product => product.category == 'Shirts')
let under50 = products1.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array


/**
 * Map methods
 */
let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

/**
 * sort methods
 */
products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log("SORTED:::::::::", products) // original array is modified to new title sorting order: 3,4,2,1

const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]

const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

// To keep a sorted array independent to the original, we need to clone it first:
const stringNums1 = ["1", "81", "41", "102", "35", "1004"]
const sortedNums1 = [...stringNums1].sort()
console.log(stringNums1) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums1) // [ '1', '1004', '102', '35', '41', '81' ]

/**
 * reverse method
 */ 
const elements1 = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements1.reverse() // modifies the original
const reversed2 = [...elements1].reverse() // clone first to preserve the original
console.log(elements1) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)


/**
 * reduce methods (Use to calculate of something like TOTAL)
 * const value = arr.reduce(function(accumulator, item, index, array) {
    // . . .
    },[initial]);
 */
const products2 = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
] // initial (below) should be 0 for reliability in calculating totals
const totalPrice = products2.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
const totalQty = products2.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
console.log(totalPrice) // 128.85000000000002
console.log(totalQty) // 10


/**
 * combined(chaining) methods (Use to calculate of something like TOTAL)
 * 
 */
const products4 = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]
// get the titles of all products over $25:
const over25Titles = products4.filter(prod => prod.price > 25).map(prod => prod.title)
console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]

// list product ids and titles in descending order of price:
const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
.map(prod => ({id: prod.id, title: prod.title}))
console.log(hiloProducts)
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]


/**
 * ITERABLES
 */
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn

// const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal' }
// for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable


const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
// { name: 'John' } => { phone: '0412345678' } }
console.log(exampleMap.get("{name: 'John'}"))
