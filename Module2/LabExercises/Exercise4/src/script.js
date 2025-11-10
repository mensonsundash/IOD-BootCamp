
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