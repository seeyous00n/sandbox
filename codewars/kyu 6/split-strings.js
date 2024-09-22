//
// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION
const solution = (str) => {
  if (!str.length) return [];

  const result = [];
  let strWithUnderscore = "";

  str.length % 2 !== 0
    ? (strWithUnderscore += str + "_")
    : (strWithUnderscore = str);

  for (let i = 0; i < strWithUnderscore.length; i += 2) {
    result.push(
      `${strWithUnderscore[i]}${
        strWithUnderscore[i + 1] ? strWithUnderscore[i + 1] : ""
      }`
    );
  }

  return result;
};

// console.log(solution("abcdef"));
// console.log(solution("abcdefg"));
