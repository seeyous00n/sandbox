// Neutralisation
//
// DESCRIPTION
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// SOLUTION
const neutralise = (s1, s2) =>
  s1
    .split("")
    .map((element, index) => (element === s2[index] ? element : 0))
    .join("");

// console.log(neutralise("--++--", "++--++"));
// console.log(neutralise("-+-+-+", "-+-+-+"));
