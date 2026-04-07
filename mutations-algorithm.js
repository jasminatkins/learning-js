function mutation(arr) {
  const secondElementLetters = arr[1];
  let count = 0;
  for (const char of secondElementLetters) {
    if (arr[0].includes(char.toLowerCase()) || arr[0].includes(char.toUpperCase())) {
      count++;
    }
  }
  if (count === arr[1].length) {
    return true;
  }
  else {
    return false;
  }
}

console.log(mutation(["hello", "Hello"]));
