let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
      count++;
      break;
    case 3:
      count++;
      break;
    case 4:
      count++;
      break;
    case 5:
      count++;
      break;
    case 6:
      count++;
      break;
    case 7:
      count;
      break;
    case 8:
      count;
      break;
    case 9:
      count;
      break;
    case 10:
      count--;
      break;
    case "J":
      count--;
      break;
    case "Q":
      count--;
      break;
    case "K":
      count--;
      break;
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return `The current count is ${count}. Bet.`;
  }
  else {
    return `The current count is ${count}. Hold.`;
  }
}

console.log(cardCounter(10));
