// Get the Middle Character
//
// Description:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"

// SOLUTION
const getMiddle = (s) => {
  let arr = s.split("");
  let middleIndex = Math.ceil(arr.length / 2) - 1;
  if (arr.length % 2 === 0) {
    return arr[middleIndex] + arr[Math.ceil(arr.length / 2)];
  } else {
    return arr[middleIndex];
  }
};

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
