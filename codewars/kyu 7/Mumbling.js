// Mumbling
//
// Description:
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"

// SOLUTION
const accum = (s) => {
  return s
    .split("")
    .map(
      (value, index) =>
        value.toUpperCase() +
        value
          .toLowerCase()
          .repeat(index + 1)
          .slice(1)
    )
    .join("-");
};

// console.log(accum("RqaEzty"));
