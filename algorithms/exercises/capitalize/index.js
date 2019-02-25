// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let finalString = str[0].toUpperCase();
  for (let index = 0; index < str.length; index++) {
    const element = str[index - 1];
    if (element === " ") finalString += str[index].toUpperCase();
    else finalString += str[index];
  }
  return finalString;
}

module.exports = capitalize;
