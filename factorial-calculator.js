const num = 9;

function factorialCalculator(number) {
  let result = 1;
  while (number > 1) {
    result = result * number;
    number--;
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
