/**
 * Functions
 */

/* *********************** Functions Starts *********************** 
 * 
 */

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}

console.log( checkAge(21) ) // adult
console.log( checkAge(13) ) // non-adult

/* *********************** Functions end ***********************/