// Vowel Count
//
// Description:
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// SOLUTION
const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .toLowerCase()
    .split("")
    .reduce(
      (accum, currentValue) =>
        vowels.includes(currentValue) ? (accum += 1) : accum,
      0
    );
};

//console.log(getCount("abracadabra"));
