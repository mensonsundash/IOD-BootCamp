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
