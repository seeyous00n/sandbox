// A wolf in sheep's clothing
// 
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// SOLUTION 
const warnTheSheep = (queue) => {
  let recerse = queue.reverse();
  if (recerse[0] === "wolf") return "Pls go away and stop eating my sheep";
  let result = "";
  recerse.forEach((element, index) => {
    if (element === "wolf") {
      result = `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
    }
  });

  return result;
};

/* console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
); */
