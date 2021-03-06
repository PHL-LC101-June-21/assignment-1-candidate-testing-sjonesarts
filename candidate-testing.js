const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName// 
let candidateName = ''
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the First American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ''
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []

  // TODO 1.1b: Ask for candidate's name //

function askForName() {
  candidateName = input.question("What is your name? ")
  return candidateName

}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

function askQuestion() {
  for (let i = 0; i <= questions.length - 1; i++) {
    quizAnswer= input.question(`Question ${i + 1}: ${questions[i]}`)
    candidateAnswers.push(quizAnswer)
    console.log (`Your answer: ${quizAnswer} \nCorrect answer: ${correctAnswers[i]}\n`)
  }
  
return candidateAnswers
}

function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numberCorrect = -1;

    for (let i = 0; i <= 5; i++) {
      if (String(candidateAnswers[i]).toUpperCase() == String(correctAnswers[i]).toUpperCase()) { 
      numberCorrect++;
      } 
    }
    
  let grade = numberCorrect/5 * 100

if (grade >= 80) {
  console.log(`Overall Grade: ${grade}%.\nQuiz Passed!`)
 } else {
  console.log(`Overall Grade: ${grade}%.\nQuiz Failed!`)
 }
 return grade
}

function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName}!\n`)
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};