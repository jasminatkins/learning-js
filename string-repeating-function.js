function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  if (num <= 0) {
    return repeatedString;
  }
  for (let i = 1; i <= num; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

console.log(repeatStringNumTimes("hi", 3));
