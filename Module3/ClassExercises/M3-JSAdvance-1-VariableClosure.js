function makeAdder(x) {
  // function factory: bundles value of x into the scope of adder
  return function adder(y) {
    // closure function 'adder' now has access to both x and y when created
    return x + y;
  };
}

const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
console.log(add5(10)); // x is still 5 and y is 10, result is 15
