function chunkArrayInGroups(arr, num) {
  let chunkedArray = [];
  while (arr.length >= num) {
    chunkedArray.push(arr.splice(0, num));
  }
  if (arr.length !== 0) {
    chunkedArray.push(arr);
  }
  return chunkedArray;
}

console.log(chunkArrayInGroups(["banana", "orange", "mango", "peach", "apple", "pineapple", "lemon", "tangerine", "lime", "nectarine", "grapefruit"], 2));
