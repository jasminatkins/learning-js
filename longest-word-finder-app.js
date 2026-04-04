function findLongestWordLength(sentence) {
  const wordArray = (sentence.trim().split(" "));
  let wordLengthsArray = [];

  for (const word of wordArray) {
    wordLengthsArray.push(word.length);
  }
  return Math.max(...wordLengthsArray);
}

console.log(findLongestWordLength("An example sentence here."));
