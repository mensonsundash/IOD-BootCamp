const {getData, divide, multiply, add, substract }  = require("../controllers/calculateControllers")
const request = require('supertest');
const app = require('../app')

// test('divide of numbers', () => {
//     expect(divide(4,2)).toBe(2);
// })

describe("Calculator API TESTING", () => {
    test("GET /calculate => Welcome message", async () => {
        const res = await request(app).get("/calculate");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Welcome to calculator");
    });

    test("GET /calculate/divide?num1=16&num2=4 => 4", async()=>{
        const res = await request(app).get("/calculate/divide?num1=16&num2=4");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({data: 4});
    })

    test("GET /calculate/multiply?num1=10&num2=4 => 40", async()=>{
        const res = await request(app).get("/calculate/multiply?num1=10&num2=4");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({data: 40});
    })

    test("GET /calculate/add?num1=10&num2=4 => 14", async()=>{
        const res = await request(app).get("/calculate/add?num1=10&num2=4");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({data: 14});
    })

    test("GET /calculate/substract?num1=10&num2=4 => 6", async()=>{
        const res = await request(app).get("/calculate/substract?num1=10&num2=4");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({data: 6});
    })
})