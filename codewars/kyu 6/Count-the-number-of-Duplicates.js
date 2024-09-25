// Counting Duplicates
//
// Description:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0
// "aabbcde" -> 2
// "aabBcde" -> 2

// SOLUTION
const duplicateCount = (text) => {
  if (text.length === 0) return 0;

  const obj = text
    .toLowerCase()
    .split("")
    .reduce((accum, curentValue) => {
      accum.hasOwnProperty(curentValue)
        ? (accum[curentValue] = 1)
        : (accum[curentValue] = 0);
      return accum;
    }, {});

  return Object.values(obj).reduce(
    (accum, currentvalue) => (accum += currentvalue)
  );
};

//console.log(duplicateCount("aabbcde"));
//console.log(duplicateCount("Indivisibility"));
