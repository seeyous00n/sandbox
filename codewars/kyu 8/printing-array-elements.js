// DESCRIPTION
// Printing Array elements with Comma delimiters
//
// Input: Array of elements
//
// ["h","o","l","a"]
//
// Output: String with comma delimited elements of the array in th same order.
//
// "h,o,l,a"

// SOLUTION
const printArray = (array) => array.join(",");

console.log(printArray(["h", "o", "l", "a"]));
