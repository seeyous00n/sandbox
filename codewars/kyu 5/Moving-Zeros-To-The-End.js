// Moving Zeros To The End
//
// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// SOLUTION
const moveZeros = (arr) => {
  let countZero = 0;
  let tempArr = arr.filter((value) => {
    if (value === 0) countZero++;
    return value !== 0;
  });
  return [...tempArr, ...new Array(countZero).fill(0)];
};

// console.log(moveZeros([1, 2, null, 0, 1, false, 0, 1, 0, 3, 0, 1]));
