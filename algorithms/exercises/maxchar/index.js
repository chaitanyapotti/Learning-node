// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  const currentMax = { char: "", count: 0 };
  for (let index = 0; index < str.length; index++) {
    obj[str[index]] = obj[str[index]] ? obj[str[index]] + 1 : 1;
    if (obj[str[index]] > currentMax["count"]) {
      currentMax["char"] = str[index];
      currentMax["count"] = obj[str[index]];
    }
  }
  return currentMax["char"];
}

module.exports = maxChar;
