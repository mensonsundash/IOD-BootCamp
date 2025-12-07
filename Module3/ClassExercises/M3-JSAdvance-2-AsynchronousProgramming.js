/**
 * SET TIMEOUT
 */
// setTimeout(() => console.log("First"), 1000, "print aftere 1 sec");
// setTimeout(() => console.log("Second"), 2000, "print aftere 2 sec");
// setTimeout(() => console.log("Third"), 3000, "print aftere 3 sec");
// setTimeout(() => console.log("Fourth"), 4000, "print aftere 4 sec");
// let timerID = setTimeout(
//   () => console.log("Fifth"),
//   5000,
//   "print aftere 5 sec"
// );

// clearTimeout(timerID);

/**
 * SET INTERVAL
 */
// let counter = 0;
// setInterval(() => {
//   counter++;
//   console.log(counter, "SET INTERVAL");
// }, 1000);

// function repeatInterval(delay, limit) {
//   let counter = 1; // part of the outer environment record for repeatInterval
//   // intervalTimer is a reference to interval, to allow it to be cancelled
//   let intervalTimer = setInterval(function repeatThis() {
//     console.log(
//       "repeatInterval: repeated " + counter + " of " + limit + " times"
//     );
//     if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
//     counter++; // keep track of how many times the interval has executed, in outer environment
//   }, delay); // delay is milliseconds between intervals
// }
// repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times


/**
 * Nested setTimeout
 */

function repeatTimeout(delay, limit) {
  let counter = 1;
  // setTimeout only happens once, so we don't need the reference to cancel it
  setTimeout(
    function repeatThis(current) {
      // named function, so we can refer to it recursively
      console.log(
        "repeatTimeout: repeated " + current + " of " + limit + " times"
      );
      // we do need to call setTimeout recursively so that it repeats executing the function
      if (current < limit) setTimeout(repeatThis, delay, current + 1); // repeat if limit not reached
    },
    delay,
    counter
  );
}
repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times