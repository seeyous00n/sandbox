// Simple Fun #88: Sort By Height
//
// Description:
// Task
// Some people are standing in a row in a park. There are trees between them which cannot be moved.
//
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
//
// Example
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
//
// [-1, 150, 160, 170, -1, -1, 180, 190].

//SOLUTION
const sortByHeight = (a) => {
  let positionsTrees = [];
  let result = [];

  a.forEach((value, index) => {
    if (value === -1) positionsTrees.push(index);
  });

  result = a.filter((value) => value !== -1).sort((a, b) => a - b);

  positionsTrees.forEach((value) => {
    result.splice(value, 0, -1);
  });

  return result;
};

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
