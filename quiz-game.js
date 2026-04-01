const questions = [
  {category: "books", question: "In what year was Frankenstein first published?", choices: ["1818", "1831", "1829"], answer: "1818"},
  {category: "sports", question: "Who won the gold medal for men's combined lead and bouldering in the 2024 Olympics?", choices: ["Toby Roberts", "Sorato Anraku", "Jakob Schubert"], answer: "Toby Roberts"},
  {category: "music", question: "Who won the Grammy Award for Best New Artist in 2025?", choices: ["Chappell Roan", "Sabrina Carpenter", "Doechii"], answer: "Chappell Roan"},
  {category: "films", question: "Who directed the critically acclaimed 2019 French historical film Portrait of a Lady on Fire?", choices: ["Céline Sciamma", "Bénédicte Couvreur", "Adèle Haenel"], answer: "Céline Sciamma"},
  {category: "coding", question: "Which of the following is not a primitive data type?", choices: ["boolean", "null", "array"], answer: "array"}
];

function getRandomQuestion(questions) {
  let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  return randomQuestion;
}

let randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion);

function getRandomComputerChoice(choices) {
  let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomComputerChoice;
}

let randomComputerChoice = (getRandomComputerChoice(randomQuestion.choices));
console.log(randomComputerChoice);

function getResults(randomQuestion, randomComputerChoice) {
  if (randomQuestion.answer === randomComputerChoice) {
    return "The computer's choice is correct!";
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
  }
}

console.log(getResults(randomQuestion, randomComputerChoice));
