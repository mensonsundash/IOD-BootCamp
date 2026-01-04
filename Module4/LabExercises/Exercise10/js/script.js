let allProducts = [];//original array
let filteredProducts = [];//working array

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {
    allProducts = products;
    filteredProducts = products;

    populateCategoryDropdown(allProducts);

    renderData();
});


// LIST of all Elements
const cardList = document.getElementById("cardList");
const loader = document.getElementById("loader");

//EVENT UNITS
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");

/**
 * returns resolved array data
 */
function getData() {
    return new Promise((resolve) => {
        //small loading delay for spinner visibility
        setTimeout(() => {
            resolve(filteredProducts);
        }, 500);
    });
}

/**
 * 
 * add html template card
 */
function addCard(data) {
    const template = document.getElementById("cardTemplate").content.cloneNode(true);

    template.querySelector(".card-img").src = data.image;
    template.querySelector(".card-title").innerText = data.title;
    template.querySelector(".card-content").innerText = data.description;
    template.querySelector(".card-category").innerText = data.category;
    template.querySelector(".card-price").innerText = data.price;

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

        if(totalData.length === 0) {
            cardList.innerHTML=`<p>No Products found</p>`
            return;
        }

            totalData.forEach((data) =>  addCard(data) );
            //hide loader after rendering all data
            loader.classList.add("d-none");
        }
    );
}

//get all the unique values from full array
function getUniqueCategories(products){
    return [...new Set(products.map(p => p.category))];
}

//appending option child into select of filterSelect
function populateCategoryDropdown(products){
    filterSelect.innerHTML = `<option value>Filter by Category</option>`;
    const categories = getUniqueCategories(products);

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value= category;
        option.textContent = category;
        filterSelect.appendChild(option);
    });
}

//Events Listener for search input
searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    
    filteredProducts = allProducts.filter((product) =>  product.title.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue) );
    renderData();
    
});

// Event Listener for filter selection
filterSelect.addEventListener("change", (e) =>{
    const selectedCategory = e.target.value.toLowerCase();
    
    filteredProducts = selectedCategory ? allProducts.filter((product) => product.category.toLowerCase() === selectedCategory) : allProducts;
    renderData();
});
// Event Listener for sorting selection
sortSelect.addEventListener("change", (e) => {
    console.log("Sort: ", e.target.value);
})