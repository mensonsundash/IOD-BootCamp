let cost = 20;

let total = (cost * 4) / 50;


// Primimtive like object

let apple = {
    color : "red",
    size : "medium",
    quanitity: 5,
    valueOf() {
        return this.quanitity * 2;
    },
    toString() {
        return this.size + this.color + "royal gala";
    }
};

let totalSales = (apple * 4) /2;

let fullNameOfApple = apple.toString() + " Sobers";

console.log(totalSales);
console.log(fullNameOfApple);