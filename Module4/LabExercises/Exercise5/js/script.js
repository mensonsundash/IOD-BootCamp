let newsData = [
  { id: 1, title: "Election Results", content: "Newly elected minister outlines key reforms and future policies." },
  { id: 2, title: "Sporting Success", content: "World Cup winners celebrate historic victory with fans worldwide." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare for severe weather and follow safety advice." },
  { id: 4, title: "Tech Innovation", content: "A new AI-powered device promises to change everyday productivity." },
  { id: 5, title: "Health Update", content: "Doctors recommend updated vaccines ahead of the winter season." },
  { id: 6, title: "Market Trends", content: "Stock markets show steady growth amid global economic recovery." },
  { id: 7, title: "Education Reform", content: "Government announces changes to curriculum and assessment methods." },
  { id: 8, title: "Environmental Alert", content: "Rising sea levels prompt urgent discussions on climate action." },
  { id: 9, title: "Travel Advisory", content: "Passengers advised to check schedules due to ongoing disruptions." },
  { id: 10, title: "Community Event", content: "Local festival brings together families, food, and live music." }
];

// LIST of all Elements
const newsList = document.getElementById("newsList");
const loader = document.getElementById("loader");
const newsForm = document.getElementById("addNews");
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")

// initialize null value to intervalId
let intervalId = null;

/**
 * returns resolved array data
 */
function getNews() {
    return new Promise((resolve) => {
        //small loading delay for spinner visibility
        setTimeout(() => {
            resolve(newsData);
        }, 500);
    });
}

/**
 * 
 * add html template card
 */
function addCard(news) {
    const template = document.getElementById("cardTemplate").content.cloneNode(true);
    template.querySelector(".card-title").innerText = news.title;
    template.querySelector(".card-content").innerText = news.content;
    document.getElementById("newsList").appendChild(template);
}

/**
 * add/push new data array into newsData  
 */
function addNews(newTitle, newContent) {
    const newId = parseInt(newsData.length +1);
    const newArray = { id: newId, title: newTitle, content: newContent };
     newsData.push(newArray);
}


/**
 * render all data: iterating array and calling addCard to create card for each value
 */
function renderNews () {
    // show loader before loading data
    loader.classList.remove("d-none");

    // clear all current items
    newsList.innerHTML = "";
    
    //re-populate with latest array contents
    getNews().then((totalNews) => {
            totalNews.forEach((news) =>  addCard(news) );
            //hide loader after rendering all data
            loader.classList.add("d-none");
        }
    );
}

/**
 * function to set interval 
 */
function startAutoRefresh() {
    console.log("Starting Auto load...")
    // render news every 5 seconds
    intervalId = setInterval(() => {
        renderNews()
    }, 5000);

}

/**
 * function to clear interval 
 */
function stopAutoRefresh() {
    console.log("Stopping Auto load...")
    clearInterval(intervalId);
    intervalId = null;
}


//ADD NEWS (update array) on submit form
newsForm.addEventListener("submit", (e) =>{

    //stop default action of form that reload page on submit
    e.preventDefault();

    const title = document.getElementById("newsTitle").value.trim();
    const content = document.getElementById("newsContent").value.trim();

    if(!title || !content) return;

    //function call to add news
    addNews(title, content);

    //reset form after submission
    newsForm.reset();
    
    //rendering immediately after form submission
    renderNews();    
});

// button action to start and stop auto refresh
startBtn.addEventListener("click", () => startAutoRefresh() );
stopBtn.addEventListener("click", () => stopAutoRefresh() );

// loading auto start on page load
document.addEventListener("DOMContentLoaded", () => startAutoRefresh())





