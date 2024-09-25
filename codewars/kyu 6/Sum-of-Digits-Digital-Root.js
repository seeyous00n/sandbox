// Sum of Digits / Digital Root
//
// Description:
// Digital root is the recursive sum of all the digits in a number.
//
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

// SOLUTION
const digitalRoot = (n) => {
  if (n < 10) return n;

  let num = String(n)
    .split("")
    .reduce((accum, currentValue) => {
      return (accum += +currentValue);
    }, 0);

  return digitalRoot(num);
};

//console.log(digitalRoot(16));
//console.log(digitalRoot(456));
