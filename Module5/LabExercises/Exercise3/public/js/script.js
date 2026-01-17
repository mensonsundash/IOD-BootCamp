    //DOM element list
const calculate = document.getElementById('calculate');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operation = document.getElementById('operation');
let result = document.getElementById('result');

async function calculation() {
    const num1 = number1.value.trim();
    const num2 = number2.value.trim();
    const opt = operation.value.trim();

    const response = await axios.get(`http://localhost:3000/calculate/${opt}?num1=${num1}&num2=${num2}`)
    .then((response) => response.data);
    

    return response;

}

calculate.addEventListener("click", ()  => {
    try{
        const result = calculation();
        console.log(result)

    } catch(error){

    }
});