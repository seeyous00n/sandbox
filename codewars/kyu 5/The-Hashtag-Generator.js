// The Hashtag Generator
//
// Description:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
//  It must start with a hashtag (#).
//  All words must have their first letter capitalized.
//  If the final result is longer than 140 chars it must return false.
//  If the input or the result is an empty string it must return false.

// SOLUTION
const generateHashtag = (str) => {
  let trimStr = str.trim();
  if (trimStr.length === 0) return false;

  let reusltStr =
    "#" +
    trimStr
      .split(" ")
      .map((word) => {
        if (word) {
          return word[0].toUpperCase() + word.slice(1);
        }
      })
      .join("");

  return reusltStr.length > 140 ? false : reusltStr;
};

//console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
//console.log(generateHashtag("Codewars is nice"));
