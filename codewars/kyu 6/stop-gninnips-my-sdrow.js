// Stop gninnipS My sdroW!
//
// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
//
// "Hey fellow warriors"  --> "Hey wollef sroirraw"

// SOLUTION
const spinWords = (string) => {
  return string
    .split(" ")
    .reduce((accum, currentValue) => {
      currentValue.length >= 5
        ? accum.push(currentValue.split("").reverse().join(""))
        : accum.push(currentValue);
      return accum;
    }, [])
    .join(" ");
};

//console.log(spinWords("Hey fellow warriors"));
