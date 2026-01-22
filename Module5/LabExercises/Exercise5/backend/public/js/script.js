//DOM element list
const calculate = document.getElementById("calculate");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operation = document.getElementById("operation");
let displayResult = document.getElementById("result");

// asynchronous function
async function calculation() {
  const num1 = number1.value.trim();
  const num2 = number2.value.trim();
  const opt = operation.value.trim();
  if (!num1 || !num2) {
    throw new Error("Please enter both number");
  }

  // const response = await axios.get(`http://localhost:3000/calculate/${opt}?num1=${num1}&num2=${num2}`);
  //axios get with params : opt is api type => "calculate/add"
  const response = await axios.get(`http://localhost:3000/calculate/${opt}`, {
    params: { num1, num2 },
  });

  return response.data; // responded by API
}

// click event calling asnchronous function calculation
calculate.addEventListener("click", async () => {
  try {
    const result = await calculation();
    displayResult.textContent = result.data.toFixed(2);
  } catch (error) {
    alert(error.message);
  }
});
