//Reference to DOM element list from HTML page
const calculate = document.getElementById("calculate");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operation = document.getElementById("operation");
let displayResult = document.getElementById("result");

// Asynchronous function to send calculation request to Backend API
async function calculation() {
  //read and trim clean input values from the form
  const num1 = number1.value.trim();
  const num2 = number2.value.trim();
  const opt = operation.value.trim();
  
  //validate that both number are entered
  if (!num1 || !num2) {
    throw new Error("Please enter both number");
  }

  //Send GET request to backend API using Axios
  // const response = await axios.get(`http://localhost:3000/api/calculator/${opt}?num1=${num1}&num2=${num2}`);
  //axios get with params : opt is api type => "api/calculator/add"
  const response = await axios.get(`http://localhost:3000/api/calculator/${opt}`, {
    params: { num1, num2 },
  });

  return response.data; // Return JSON data responded by backend API
}

// Add click event Listener to the calculation button 
calculate.addEventListener("click", async () => {
  try {
    // wait for aPI response after calculation
    const result = await calculation();
    
    // display the result in the HTML
    displayResult.textContent = result.data.toFixed(2);
  } catch (error) {
    //show alert error message if input is invalid
    alert(error.message);
  }
});
