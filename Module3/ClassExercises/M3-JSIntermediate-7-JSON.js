const room = {
number: 23
}
const meetup = {
title: "Strategy Conference",
participants: ['Chris', 'Tina'],
date: "2023-03-22"
}

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

// console.log(JSON.stringify(meetup)); // TypeError: Converting circular structure to JSON
// console.log( JSON.stringify(meetup, ['title', 'participants']) ); // just stringify the properties in
// // the array: {"title":"Strategy Conference","participants":["Chris","Tina"]}
let jsonMeetup = JSON.stringify(meetup, function(key, value) {
if (key != '' && value == meetup) return undefined // skip references to current object
else if (typeof value == 'function') return value.toString() // stringify functions
return value // otherwise return original value unchanged
}, 2);
console.log( jsonMeetup ); // use 2 spaces for nicer formatting

// const room = {
// number: 23, toJSON() { return this.number }
// }
// const meetup = {
// title: "Strategy Conference", participants: ['Chris', 'Tina']
// }
// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// console.log( JSON.stringify(meetup) ); // no more circular references as room stringifies to 23
// // {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

//parsing data
let parseMeetup = JSON.parse(jsonMeetup, (key, value) => { // convert string to object
if ( !isNaN(Date.parse(value)) ) return new Date(value) // if valid date, create Date object
return value;
});
console.log(parseMeetup)