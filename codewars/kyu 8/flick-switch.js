// Flick Switch
//
// Description:
// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
//
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
//
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
//
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

//SOLUTION
const flickSwitch = (arr) => {
  let flick = true;
  return arr.reduce((accum, curentValue) => {
    if (curentValue === "flick") flick = !flick;
    accum.push(flick);
    return accum;
  }, []);
};

// console.log(flickSwitch(["codewars", "flick", "code", "wars"])); // [true, false, false, false]
// console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"])); // [false, false, false, false]
