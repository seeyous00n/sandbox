// DESCRIPTION
// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//
// SOLUTION

//Method 1
/* function isIsogram(str) {
  if (str === "") return true;

  const result = str
    .toLowerCase()
    .split("")
    .reduce((accum, value) => {
      if (accum.hasOwnProperty(value)) {
        accum[value] = accum[value] + 1;
      } else {
        accum[value] = 1;
      }
      return accum;
    }, {});
  return Math.max(...Object.values(result)) === 1;
} */

//Method 2
function isIsogram(str) {
  if (str === "") return true;

  return str
    .toLowerCase()
    .split("")
    .every((element, index, arr) => arr.indexOf(element) === index);
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
