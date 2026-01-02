const template = document.getElementById("cardTemplate").content.cloneNode(true);

template.querySelector('.card-title').innerText = "General Card Title";
template.querySelector('.card-content').innerHTML = "<p>Content Loerm Ipsum content</p>";

document.querySelector("#cardListA").appendChild(template);