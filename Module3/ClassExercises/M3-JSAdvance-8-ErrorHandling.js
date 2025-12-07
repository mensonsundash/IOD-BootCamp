//error handling can be done in runtime only not in compile time

try {
  console.log("Printing 1");
  console.log("Printing 2");
  console.log("Printing 3");
  console.log("Printing 4");

  getCip(); //the code is runnable
  // getCip(;//the code syntax error
} catch (error) {
  console.log(`There is error: ${error}`);
} finally {
  console.log("Printing 5");
  console.log("Printing 6");
  console.log("Printing 7");
  console.log("Printing 8");
  console.log("Finished the execution of the function");
}

function checkJson(json) {
  // checks json argument for validity and ensures a name property
  try {
    const user = JSON.parse(json); // parse string into object
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
    }
    return true; // returns true (valid json) if no error was thrown above
  } catch (err) {
    if (err instanceof SyntaxError) {
      // once caught, we can do specific things based on error type
      console.log("JSON Error: " + err.message);
    } else {
      throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
    }
  }
  finally {
    console.log("finished checkJson code execution")
  }
  return false; // returns false if any error occurred
}

//object created
let jsonValue = {
    location: "Holti",
    lastName: "Sinju"
};
//converting object into JSON string
checkJson(JSON.stringify(jsonValue));