const questions = questionsEasy;
const welcomeContainer = document.getElementById("welcome");
const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");
const questionContainer = document.getElementById("question");
const checkButton = document.getElementById("check");
let currentRandomNumber = (Math.floor(Math.random() * questions.length));
let currentQuestion = questions[currentRandomNumber]["question"];
let currentAnswer = questions[currentRandomNumber]["answer"];
let attemptNumber = 0;
let questionsLeft = questions.length;

window.addEventListener('load', function () {
  errorElement.classList.add("hidden");
  successElement.classList.add("hidden");
  console.log(currentRandomNumber);
  console.log(currentQuestion);
  console.log(currentAnswer);
  questionContainer.innerHTML = currentQuestion;
  document.getElementById("attempts").innerText = 0;
  document.getElementById("questions-left").innerText = questionsLeft;
});

checkButton.addEventListener('click', answerCheck);

/**
 * Checks whether the answer given by the user is the same as the correct answer and modifies the viewport accordingly
 * Also checks whether there are any questions that haven't been answered
 * @example
 * // correct answer is "hello"
 * //user inputs "ola"
 * //viewport is modified to inform the user that their answer is wrong
 * @example
 * //correct answer is "hello"
 * //user inputs "hello"
 * //viewport is modified to inform the user that their answer is correct
 * @example
 * //after a correct answer if there are still questions to answer ---> displays the next random question
 * @example
 * //after an incorrect answer ---> displays the same question
 */
function answerCheck() {
  document.getElementById("attempts").innerText = attemptNumber = attemptNumber + 1;
  welcomeContainer.classList.add("hidden");
  const userAnswer = document.getElementById("inputAnswer").value;
  if (userAnswer === currentAnswer) {
    console.log(userAnswer);
    successElement.classList.remove("hidden");
    errorElement.classList.add("hidden");
    console.log(currentRandomNumber);
    questions.splice(currentRandomNumber, 1);
    console.log(questions);
    document.getElementById("questions-left").innerText = questionsLeft = questionsLeft - 1;
    if (questions.length === 0) {
      const winModalContainer = document.getElementById("winModal");
      winModalContainer.classList.remove("hidden");
      winModalContainer.innerHTML += "<div class='modal-content'> <h3>!!! W I N N E R !!!</h3> <p>You have reached the end of the quiz! </p> <div>";
    } else {
      currentRandomNumber = (Math.floor(Math.random() * questions.length));
      currentQuestion = questions[currentRandomNumber]["question"];
      currentAnswer = questions[currentRandomNumber]["answer"];
      questionContainer.innerHTML = currentQuestion;
      console.log(currentRandomNumber);
      console.log(currentQuestion);
      console.log(currentAnswer);
      console.log(questions);
    }
  } else {
    successElement.classList.add("hidden");
    errorElement.classList.remove("hidden");
  }
  document.getElementById("inputAnswer").value = "";
};

