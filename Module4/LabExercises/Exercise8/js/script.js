//INPUT UNITS
const dob = document.getElementById('dob');
const date2 = document.getElementById('date2');

//EVENT UNITS
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');

//DISPLAY UNITS
const currentDateDisplay = document.getElementById('currentDateDisplay');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');


//create a new luxon date
const DateTime = luxon.DateTime;
const currentDateTime = DateTime.now();

// DOB must not allow future date
const currentDateISOformat = getDateToISODate(currentDateTime);//converting date&Time to ISO string and then split date and time and getting only date(yyyy-mm-dd) from array [0]
dob.max = currentDateISOformat;

const currentTime = currentDateTime.toFormat("h:mm a");
const currentDate = getDateToLocalString(currentDateISOformat);//convert into locale string format

// get current date & time
currentDateDisplay.innerText =  `${currentDate} ${currentTime}`;

//if question 1 click button pressed
question1.addEventListener("click", () =>{
    const dobValue = dob.value.trim();
    
    if(!dobValue) alert("DOB is required");

    const result = DateDiff(currentDateISOformat, dobValue, ["days"])
    result1.innerText = result;
});

//if question 2 click button pressed
question2.addEventListener("click", () =>{
    const dobValue = dob.value.trim();
    
    if(!dobValue) alert("DOB is required!");

    const result = DateDiff(currentDateISOformat, dobValue, ["years", "months", "days"])
    result2.innerText = result;
});

//if question 3 click button pressed
question3.addEventListener("click", () =>{
    const dobValue = dob.value.trim();
    const date2Value = date2.value.trim();
    
    if(!dobValue || !date2Value) alert("Both date is required!");

    result3.innerText = getClosestDate(dobValue, date2Value);
});

//if question 4 click button pressed
question4.addEventListener("click", () => {
    const dobValue = dob.value.trim();
    const date2Value = date2.value.trim();
    if(!dobValue || !date2Value) return alert("Both date is required!"); 
    
    // const d1 = parseInt(DateDiff(dobValue, date2Value, ["days"]));
    result4.innerText = getBeforeAfterDate(dobValue, date2Value);
});

//if question 5 click button pressed
question5.addEventListener("click", () => {
    const dateTime= getDateToTimezone(currentDateTime, "Europe/London") 
    const timeFormat = dateTime.toFormat("h:mm a");
    result5.innerText = `London Time: ${timeFormat}`;
});


/**
 * 
 * @param {*} currentDateTime 
 * @param {*} oldDate 
 * @param {*} format ["years", "months", "days"]
 * @returns difference in currentdate and dob date
 */
function DateDiff(currentDateTime, oldDate, format){
    let result = ''
    const end = setDateToLuxonISODate(currentDateTime);
    const start = setDateToLuxonISODate(oldDate);

    const diff = end.diff(start, format).toObject();

    
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);

    if(format.includes('years')) result += `${years} years, `
    if(format.includes('months')) result += `${months} months, `
    if(format.includes('days')) result += `${days} days`

    return result ;
}

//get date into string format
function getDateToLocalString(date){
    date = setDateToLuxonISODate(date);// converting date into luxonISODate format
    return date.toLocaleString(DateTime.DATE_FULL);
}

//get date to ISO date only format
function getDateToISODate(date) {
    return date.toISODate(DateTime.DATE_FULL)
}

//get date to ISO time only format
function getDateToISOTime(date) {
    return date.toISOTime(DateTime.DATE_FULL)
}

function getDateToTimezone(dateTime, timezone){
    return dateTime.setZone(timezone)
}

//converting normal dates into luxon ISO format
function setDateToLuxonISODate(date){
    return DateTime.fromISO(date);
}

/**
 * 
 * @param {*} date1 
 * @param {*} date2 
 * @returns the date closest to current date in iso format (2026-1-3)
 */
function getClosestDate(date1, date2) {
    const d1 = parseInt(DateDiff(currentDateISOformat, date1, ["days"]));
    const d2 = parseInt(DateDiff(currentDateISOformat, date2, ["days"]));
    
    return d1 > d2 ? getDateToLocalString(date2) : getDateToLocalString(date1) ;
}


function getBeforeAfterDate(date1, date2) {
    const d1 = parseInt(DateDiff(date1, date2, ["days"]));
    date1 = getDateToLocalString(date1);
    date2 = getDateToLocalString(date2);
    return d1 > 0 ? `${date1} is after ${date2}` : `${date1} is before ${date2}`;
}



