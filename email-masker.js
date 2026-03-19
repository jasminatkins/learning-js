function maskEmail(email) {
  let indexOfAtSign = email.indexOf("@");
  let maskedEmailFirstCharacter = email.slice(0, 1);
  let maskedEmailFinalCharacter = email.slice((indexOfAtSign - 1), indexOfAtSign);
  let numberOfStars = (indexOfAtSign - 2);
  let star = "*";
  let domain = email.slice(indexOfAtSign);
  return maskedEmailFirstCharacter + star.repeat(numberOfStars) + maskedEmailFinalCharacter + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
