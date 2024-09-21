// Exes and Ohs
//
// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false

// SOLUTION
function XO(str) {
  const arr = str.toLowerCase().split("");
  const o = arr.filter((item) => item === "o");
  const x = arr.filter((item) => item === "x");
  return o.length === x.length;
}

// console.log(XO("xo"));
// console.log(XO("xxxm"));
