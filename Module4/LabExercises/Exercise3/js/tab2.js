const userData = [
  { name: "Bob", age: 23 },
  { name: "Alice", age: 39 },
  { name: "Jeena", age: 21 },
  { name: "Xylo", age: 23 },
  { name: "Carl", age: 27 },
  { name: "Paula", age: 32 },
];

//
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 1000);
  });
}

function addCard(user) {
  const template = document.getElementById("cardTemplate").content.cloneNode(true);
  template.querySelector(".card-title").innerText = user.name;
  template.querySelector(".card-content").innerHTML= `<p>${user.age}</p>`;
  document.querySelector("#cardListB").appendChild(template);
}

getData().then((users) => users.forEach((user) => addCard(user)));
