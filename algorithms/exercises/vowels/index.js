// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// str = str.toLowerCase();
//   for (let index = 0; index < str.length; index++) {
//     if (str[index] === "a" || str[index] === "e" || str[index] === "i" || str[index] === "o" || str[index] === "u") {
//       counter++;
//     }
//   }
//   return counter;

// let counter = 0;
// const checker = "aeiou";
// for (let char of str.toLowerCase()) {
//   if (checker.includes(char)) counter++;
// }
// return counter;
