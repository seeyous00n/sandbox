// Clothes size number converter
//
// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.
//
// Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.
//
// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)
//
// The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.
//
// (For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

// SOLUTION
const currentSize = (size, x = 0) => {
  let result = 0;
  switch (size) {
    case "s":
      result = 36 - x;
      break;
    case "m":
      result = 38 - x;
      break;
    case "l":
      result = 40 + x;
      break;
    default:
      result = null;
  }

  return result;
};

const sizeToNumber = (size) => {
  if (size === "") return null;

  let result = 0;

  if (size.length === 1) {
    result = currentSize(size);
  } else {
    const lastChar = size[size.length - 1];
    if (lastChar === "m") return null;
    const countX = size.slice(0, -1).split("");
    result = countX.every((item) => item === "x")
      ? currentSize(lastChar, countX.length * 2)
      : null;
  }

  return result;
};
