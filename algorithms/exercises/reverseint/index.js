// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = n < 0;
  const stringInt = sign ? (-n).toString() : n.toString();
  let finalString = "";
  for (let index = stringInt.length - 1; index >= 0; index--) {
    finalString += stringInt[index];
  }
  return sign ? -parseInt(finalString, 10) : parseInt(finalString, 10);
}

module.exports = reverseInt;
