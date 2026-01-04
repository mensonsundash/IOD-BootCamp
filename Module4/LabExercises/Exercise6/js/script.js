let dataArr =  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
.then((response) => response.json())
.then((json) => json)


// LIST of all Elements
const cardList = document.getElementById("cardList");
const loader = document.getElementById("loader");

/**
 * returns resolved array data
 */
function getData() {
    return new Promise((resolve) => {
        //small loading delay for spinner visibility
        setTimeout(() => {
            resolve(dataArr);
        }, 500);
    });
}

/**
 * 
 * add html template card
 */
function addCard(data) {
    const template = document.getElementById("cardTemplate").content.cloneNode(true);
    template.querySelector(".card-title").innerText = data.title;
    template.querySelector(".card-content").innerText = data.body;
    document.getElementById("cardList").appendChild(template);
}

/**
 * render all data: iterating array and calling addCard to create card for each value
 */
function renderData () {
    // show loader before loading data
    loader.classList.remove("d-none");

    // clear all current items
    cardList.innerHTML = "";
    
    //re-populate with latest array contents
    getData().then((totalData) => {
            totalData.forEach((data) =>  addCard(data) );
            //hide loader after rendering all data
            loader.classList.add("d-none");
        }
    );
}

// loading auto start on page load
document.addEventListener("DOMContentLoaded", () => renderData())