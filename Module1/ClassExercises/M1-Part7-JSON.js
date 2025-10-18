let userData = {
    firstName : "Shammy",
    lastName : "Sharryy",
    age: 25,
    followers: 1000
};

console.log(userData.firstName);
console.log(userData.lastName);
console.log(userData.age);
console.log(userData.followers);

userData.followers = 1200;
userData['age'] = 30;

console.log(userData);

let book = {
    Author : "William Shakespear",
    "Published year": "1950-02-01",
    Company: "xyz"
}

console.log(book.Author)
book["Published year"] = "1930-03-03";
console.log(book);

book.publisher = "Anonymous";
console.log(book);
delete book["Published year"];
