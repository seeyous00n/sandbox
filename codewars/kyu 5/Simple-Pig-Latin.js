// Simple Pig Latin
// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION
const isChar = (str) => {
  return (
    (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) ||
    (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)
  );
};

const pigIt = (str) => {
  const ay = "ay";

  return str
    .split(" ")
    .map((value) => {
      if (value.length === 1 && !isChar(value)) {
        return value;
      }
      let firstChar = value[0];
      let newString = value.slice(1) + firstChar + ay;
      return newString;
    })
    .join(" ");
};

//console.log(pigIt("Pig latin is cool"));
//console.log(pigIt("This is my string !"));
