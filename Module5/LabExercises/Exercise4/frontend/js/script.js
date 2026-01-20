// VARIABLES UNIT
let allFriends = [];//original array
let filteredFriends = [];//working array

//setting backend url
let port = 3000;
let backenURL = `http://localhost:${port}`;

// DOM Elements Ids
const friendsTemplate = document.getElementById("friendsTemplate");
const friendsList = document.getElementById("friendsList");
const loader = document.getElementById("loader");

//EVENT UNITS
const resetBtn = document.getElementById("resetBtn");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const editFriend = document.getElementById("editFriend");
const deleteFriend = document.getElementById("deleteFriend");
// INITIAL LOAD
async function loadAllFriends() {
    try{
        const response = await axios.get(`${backenURL}/friends`);
        allFriends = response.data;
        filteredFriends = response.data;
        renderData()

    } catch(error) {
        console.error("Initial load error: ", error);
        filteredFriends = []
        renderData()
    }
}

loadAllFriends();


/**
 * returns resolved array data
 */
function getData() {
    return new Promise((resolve) => {
        //small loading delay for spinner visibility
        setTimeout(() => {
            resolve(filteredFriends);
        }, 500);
    });
}

/**
 * 
 * add html template card
 */
function addData(data) {
    const template = friendsTemplate.content.cloneNode(true);

    template.querySelector("#id").innerText = data.id;
    template.querySelector("#name").innerText = data.name;
    template.querySelector("#gender").innerText = data.gender;

    //adding id into each button
    template.querySelector("#editFriend").dataset.friendId = data.id; // add dataset friend-id on button
    template.querySelector("#deleteFriend").dataset.friendId = data.id; // add dataset friend-id on button

    friendsList.appendChild(template);
}

/**
 * render all data: iterating array and calling addData to create card for each value
 */
function renderData () {
    // show loader before loading data
    loader.classList.remove("d-none");

    // clear all current items
    friendsList.innerHTML = "";
    
    //re-populate with latest array contents
    getData().then((totalData) => {

        if(!Array.isArray(totalData) || totalData.length === 0) {
            friendsList.innerHTML=`<p>No Friends found</p>`
            loader.classList.add("d-none");
            return;
        }

            totalData.forEach((data) =>  addData(data) );
            //hide loader after rendering all data
            loader.classList.add("d-none");
        }
    );
}


async function renderDataById(id) {
    
    try{
        const response = await axios.get(`${backenURL}/friends/${id}`);
        filteredFriends = response.data;
    } catch(error) {
        console.error("Filter fetch error:", error);
        filteredFriends = [];
    }
    document.getElementById('editId').innerText = filteredFriends.id
    document.getElementById('editName').innerText = filteredFriends.name
    document.getElementById('editGender').innerText = filteredFriends.gender
    
}
// function to reset
function resetData(){
    searchInput.value = '';
    filterSelect.value = '';
    loadAllFriends()
}
/**
 * function to control states of all query action together
 */
async function applyFiltersAndSort() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategory = filterSelect.value.trim().toLowerCase();
    
    // if no filters, show original list
    if(!query && !selectedCategory) {
        filteredFriends = allFriends;
        renderData();
        return;
    }

    // fetch(`${backenURL}/friends/filter?letter=${query}&gender=${selectedCategory}`)
    //     .then((response) => response.json())
    //     .then((friends) => {
    //         filteredFriends = friends; //updating working arrayy data
    //     });

    try{
        const response = await axios.get(`${backenURL}/friends/filter?letter=${query}&gender=${selectedCategory}`);
        
        filteredFriends = response.data;
    } catch(error) {
        console.error("Filter fetch error:", error);
        filteredFriends = [];
    }
    
    //rendering
    renderData();
}

// Events Listener for all input connecting to group function
searchInput.addEventListener("input", applyFiltersAndSort);
filterSelect.addEventListener("change", applyFiltersAndSort);
resetBtn.addEventListener("click", resetData);
friendsList.addEventListener("click", (e) => {
    // const btn = e.target.closest("button[data-action]");
    const btnEdit = e.target.closest("#editFriend");
    const btnDelete = e.target.closest("#deleteFriend");

    if(btnEdit) {
        const id = Number(btnEdit.dataset.friendId);
        renderDataById(id)
    }
    if(btnDelete){
        const id = Number(btnDelete.dataset.friendId);
        deleteDataById(id)
    } 
})



