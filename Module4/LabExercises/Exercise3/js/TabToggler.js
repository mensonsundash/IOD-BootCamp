// initializing array object for each script for each tab with required script location src
const tabScripts = {
    tab1: 'js/tab1.js',
    tab2: 'js/tab2.js',
    tab3: 'js/tab3.js',
    tab4: 'js/tab4.js'
};


const buttons = document.querySelectorAll(".tab-btn");
const contents =document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    loadScript(tabScripts['tab1']);
})

//iterating array value from queryselectorall of .tab-btn
buttons.forEach( (btn) => {

    btn.addEventListener("click", () => {
        // remove active from all buttons
        buttons.forEach(b => b.classList.remove("active"));
        // hide all content
        contents.forEach(c => c.classList.add("d-none"));

        // setting timer to load data precisely without any missing information
        setTimeout(() => {
            const tabId = btn.dataset.tab;

            console.log(tabId)
            // activate clicked tab
            btn.classList.add("active");
            //getting clicked button dataset tab and remove only its class d-none
            document.getElementById(tabId).classList.remove("d-none");    

            if(tabScripts[tabId]) {
                // console.log(tabScripts(tabId))
                loadScript(tabScripts[tabId]);
            }

        }, 500);
        
    })
});


// writing a promise to load script elemlent and append with src we got from onclick
function loadScript(src) {
    return new Promise((resolve,reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    })
}