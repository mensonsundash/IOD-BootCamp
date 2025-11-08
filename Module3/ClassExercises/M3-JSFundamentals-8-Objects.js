/**
 * Objects
 */

/* *********************** Objects Starts *********************** 
 * 
 */
// Iteration for loop
let myGoal = 10;

for(let i=0; i< myGoal; i++) {
  console.log(`Iteration of ${i} of ${myGoal}`);
}

// Iteration for in
const phone = {
  model:"iPhone 14",
  colour: 'black',
  storage: 64
};

for(let key in phone){
  // console.log("key:" + key);
  // console.log("value:" + phone[key]);
  console.log(`${key} => ${phone[key]}`);
}

/* *********************** Objects end ***********************/