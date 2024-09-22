// Find the odd int
//
// Description:
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).

// SOLUTION
const findOdd = (A) => {
  const obj = A.reduce((accum, currentValue) => {
    !accum[currentValue]
      ? (accum[currentValue] = 1)
      : (accum[currentValue] += 1);
    return accum;
  }, {});

  return +Object.entries(obj).filter((value) => value[1] % 2 !== 0)[0][0];
};

// console.log(findOdd([7]));
// console.log(findOdd([1, 1, 2]));
