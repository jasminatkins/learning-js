function confirmEnding(str1, str2) {
  let str2Length = str2.length;
  let strEnding = str1.slice(-str2Length);
  if (strEnding === str2) {
    return true;
  }
  else {
    return false;
  }
}

console.log(confirmEnding("sand", "and"));
