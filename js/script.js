const template = document.getElementById("menuTemplate").content.cloneNode(true);
 
document.getElementById("desktopMenu").appendChild(template);
document.getElementById("mobileMenu").appendChild(template);