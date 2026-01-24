const Logger = require("./Logger");

class Calculate{
    
    constructor(){
        this.logger = new Logger(); //initiating logger object
    }

    // generate random number between 0-1000000
    randomGenerator() {
        return Math.floor(Math.random() * 1000000);
    }

    //calculate divide between two numbers
    divide(a, b) {
        const id = this.randomGenerator();
        const result = a/b;

        // calling the log function from logger class and sending message as parameter
        this.logger.log(`DIVIDE id=${id} : a=${a} b=${b} result=${result}`);

        return { id, result };
    }

    //calculate multiply between two numbers
    multiply(a, b){
        const id = this.randomGenerator();
        const result = a * b;

        this.logger.log(`MULTIPLY id=${id} : a=${a} b=${b} result=${result}`);

        return { id, result };
    }

    //calculate add between two numbers
    add(a, b){
        const id = this.randomGenerator();
        const result = a + b;

        this.logger.log(`ADD id=${id} : a=${a} b=${b} result=${result}`);

        return { id, result };
    }

    //calculate substract between two numbers
    substract(a, b){
        const id = this.randomGenerator();
        const result = a - b;

        this.logger.log(`SUBSTRACT id=${id} : a=${a} b=${b} result=${result}`);

        return { id, result };
    }


}

module.exports = Calculate;