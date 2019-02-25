// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function helper(str) {
  const charMap = {};
  const regStr = str.replace(/[^\w]/g, "").toLowerCase();
  for (let i = 0; i < regStr.length; i++) {
    const element = regStr[i];
    charMap[element] = charMap[element] || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const stringAObj = helper(stringA);
  const stringBObj = helper(stringB);
  if (Object.keys(stringAObj).length !== Object.keys(stringBObj).length) return false;
  for (const key in stringAObj) {
    if (stringAObj[key] !== stringBObj[key]) return false;
  }
  return true;
}

module.exports = anagrams;
