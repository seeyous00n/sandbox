// Rot13
// 
// Description:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// 
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// SOLUTION
const getCharOffset = (min, max, number, offset) => {
  number += offset;
  if (number > max) {
    number = min - 1 + number - max;
  }
  
  return String.fromCharCode(number);
};

const convertChar = (cahr) => {
  let number = cahr.charCodeAt(0);
  let offset = 13;
  if (number >= 65 && number <= 90) return getCharOffset(65, 90, number, offset);
  if (number >= 97 && number <= 122) return getCharOffset(97, 122, number, offset);
  return cahr;
};

const rot13 = (message) => {
  return message
    .split("")
    .map((value) => convertChar(value))
    .join("");
};

// console.log(rot13("test"));
// console.log(rot13("Test"));