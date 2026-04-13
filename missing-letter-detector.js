function fearNotLetter(str) {
  if (str.toLowerCase().includes("abcdefghijklmnopqrstuvwxyz")) {
    return;
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (str.toLowerCase().charCodeAt(i) === str.toLowerCase().charCodeAt(i + 1) - 2) {
      return String.fromCharCode(str.toLowerCase().charCodeAt(i) + 1);
    }
  }
}

console.log(fearNotLetter("bcdf"));
