let position = document.getElementById("jobTitle");
let containerCardDisplay = document.querySelector(".display");
let email = document.getElementById("email").innerText;
let website = document.getElementById("website").innerText;
let phone = document.getElementById("phone").innerText;
let details= "";
position.addEventListener("click", () => {
  //setting timeout to execute statement on 600ms
  setTimeout(() => {
    details = `
    <h1>Hi, I'm Jane Doe,</h1>
    
    <h3>My Details:</h3>
      Email: ${email} <br>
      Website: ${website} <br>
      Phone: ${phone}
    `;
    containerCardDisplay.innerHTML = details;
    console.log(details);
  }, 600);
});