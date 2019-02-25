// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkArray = [];
  for (let index = 0; index < array.length; index += size) {
    const sliced = array.slice(index, index + size);
    chunkArray.push(sliced);
  }
  return chunkArray;
}

module.exports = chunk;

// for (let index = 0; index < array.length; index++) {
//     const lastChunk = chunkArray[chunkArray.length - 1];
//     if (!lastChunk || lastChunk.length === size) {
//       chunkArray.push([array[index]]);
//     } else {
//       lastChunk.push(array[index]);
//     }
//   }

// const chunkArray = [];
//   const chunksRequired = array.length % size === 0 ? array.length / size : parseInt(array.length / size, 10) + 1;
//   for (let index = 0; index < chunksRequired; index++) {
//     chunkArray.push([]);
//   }
//   for (let index = 0; index < array.length; index++) {
//     const chunkArrayIndex = Math.floor(index / size);
//     chunkArray[chunkArrayIndex].push(array[index]);
//   }
//   return chunkArray;
