// select header toggle menu bar
let toggleiconBtn = document.querySelector(".header-toggle");

//select all nav links inside nav menu
let navLinks = document.querySelectorAll(".nav-menu a");

//add click listener to each links
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // remove active from all when clicked
        navLinks.forEach(lnk => lnk.classList.remove("active"));    
        // and add active to clicked one
        link.classList.add("active");
    })
})

// toggling header and clicked icon as per click
function headertoggle() {
    document.querySelector("#header").classList.toggle("header-show");//toggle header when click menu button
    toggleiconBtn.innerText = toggleiconBtn.innerText == "menu" ? "close" : "menu";//if menu icon then show close and toggle between each
}

//add click listener to call headertoggle function
toggleiconBtn.addEventListener("click", headertoggle)