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
const viewFriend = document.getElementById("viewFriend");
const editFriend = document.getElementById("editFriend");
const deleteFriend = document.getElementById("deleteFriend");
const editForm = document.getElementById("editForm");

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
    template.querySelector("#viewFriend").dataset.friendId = data.id; // add dataset friend-id on button
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

//asynchronous function to get data
async function getDataById(id) {
    let result = [];
    try{
        const response = await axios.get(`${backenURL}/friends/${id}`);
            result = response.data;
    } catch(error) {
        console.error("Filter fetch error:", error);
            result = [];
    }
    return result;
}

// asynchronous function to view data
async function viewDataById(id) {
    filteredFriends = await getDataById(id);
    document.getElementById('viewId').innerText = filteredFriends.id
    document.getElementById('viewName').innerText = filteredFriends.name
    document.getElementById('viewGender').innerText = filteredFriends.gender
    
}

//asynchronous function to edit data
async function editDataById(id){
    filteredFriends = await getDataById(id);

    document.getElementById('editId').value = filteredFriends.id
    document.getElementById('editName').value = filteredFriends.name
    document.getElementById('editGender').value = filteredFriends.gender
}

async function updateData(id, data) {
    try{
        const response = await axios.put(`${backenURL}/friends/${id}`, data);
        filteredFriends = response.data;
        renderData();
    } catch(error) {
        console.error("Update Failed: ", error);
    }
    
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


    //################# using fetch to get dta from backend endpoint
    // fetch(`${backenURL}/friends/filter?letter=${query}&gender=${selectedCategory}`)
    //     .then((response) => response.json())
    //     .then((friends) => {
    //         filteredFriends = friends; //updating working arrayy data
    //     });

    //using axios to get data from backend api endpoint
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
    const btnView = e.target.closest("#viewFriend");
    const btnEdit = e.target.closest("#editFriend");
    const btnDelete = e.target.closest("#deleteFriend");

    if(btnView) {
        const id = Number(btnView.dataset.friendId);
        viewDataById(id)
    }

    if(btnEdit) {
        const id = Number(btnEdit.dataset.friendId);
        editDataById(id)
    }

    if(btnDelete){
        const id = Number(btnDelete.dataset.friendId);
        deleteDataById(id)
    } 
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const editId = document.getElementById('editId').value;    
    const editName = document.getElementById('editName').value.trim();
    const editGender = document.getElementById('editGender').value.trim();
    const updateFriend  ={
        name: editName,
        gender: editGender
    }
    
    if(editId){
        updateData(editId, updateFriend)
    }

    
    
});





