// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, stair = "", row = 0) {
  if (row === n) return;
  if (stair.length === 2 * n - 1) {
    console.log(stair);
    return pyramid(n, "", row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
    stair += "#";
  } else {
    stair += " ";
  }
  pyramid(n, stair, row);
}

// pyramid(2);
module.exports = pyramid;

// const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let i = 0; i < n; i++) {
//     let hash = "";
//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (midpoint - i <= j && midpoint + i >= j) hash += "#";
//       else hash += " ";
//     }
//     console.log(hash);
//   }
