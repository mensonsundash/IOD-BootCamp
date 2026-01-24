class Logger {
    constructor() {
        this.date = new Date().toISOString();
    }
    log(message) {
        console.log(`[LOG] ${this.date} - ${message}`)
    }
}

module.exports = Logger;