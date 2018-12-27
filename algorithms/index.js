/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

const isPalindrome = str => {
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] !== str[str.length - 1 - index]) return false;
  }
  return true;
};

const palindromFn = str => {
  let maxLength = 0;
  let maxSubStr = "";
  const resultObj = {};
  for (let i = 0; i < str.length; i++) {
    resultObj[i] = { [i]: true };
  }

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      const substr = str.substring(j, i);
      //   console.log(substr, "substring");
      if (isPalindrome(substr) && substr.length > maxLength) {
        maxLength = substr.length;
        maxSubStr = substr;
        // console.log(maxLength, "maxlen");
      }
    }
  }
  console.log("max substr: ", maxSubStr);
};

palindromFn("My dad is a racecar athlete");
// console.log(isPalindrome("aappa"));

// let maxLength = 0;
//   let maxSubStr = "";
//   for (let i = 1; i <= str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       const substr = str.substring(j, i);
//       //   console.log(substr, "substring");
//       if (isPalindrome(substr) && substr.length > maxLength) {
//         maxLength = substr.length;
//         maxSubStr = substr;
//         // console.log(maxLength, "maxlen");
//       }
//     }
//   }
//   console.log("max substr: ", maxSubStr);

/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */
