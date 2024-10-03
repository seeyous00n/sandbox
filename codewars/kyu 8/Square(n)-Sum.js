// Square(n) Sum
// Description:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// SOLUTION
const squareSum = (numbers) =>
  numbers.reduce(
    (accum, currentValue) => (accum += Math.pow(currentValue, 2)),
    0
  );
