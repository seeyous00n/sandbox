// Find The Parity Outlier
//
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// SOLUTION
function findOutlier(integers) {
  let odd = [];
  let even = [];
  let i = 0;
  while (i < integers.length) {
    integers[i] % 2 === 0 ? odd.push(integers[i]) : even.push(integers[i]);
    if (odd.length > 1 && even.length > 1) break;
    i++;
  }

  return odd.length > even.length ? even[0] : odd[0];
}

//console.log(findOutlier([0, 1, 2]));
//console.log(findOutlier([2, 6, 8, 10, 3]));
