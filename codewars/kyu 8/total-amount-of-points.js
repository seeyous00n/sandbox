// Total amount of points
//
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// SOLUTION
const points = (games) => {
  return games.reduce((accum, currentValue) => {
    const x = currentValue[0];
    const y = currentValue[2];
    if (x > y) return accum + 3;
    if (x === y) return accum + 1;
    return accum;
  }, 0);
};

//console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
