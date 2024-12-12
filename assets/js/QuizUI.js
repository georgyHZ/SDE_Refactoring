export default class QuizUI {
    constructor(quiz) {
      this.quiz = quiz;
      this.welcomeContainer = document.getElementById("welcome");
      this.errorElement = document.getElementById("error");
      this.successElement = document.getElementById("success");
      this.questionContainer = document.getElementById("question");
      this.checkButton = document.getElementById("check");
      this.inputAnswer = document.getElementById("inputAnswer");
      this.attemptsElement = document.getElementById("attempts");
      this.questionsLeftElement = document.getElementById("questions-left");
      this.checkButton.addEventListener("click", () => this.answerCheck());
      this.errorElement.classList.add("hidden");
      this.successElement.classList.add("hidden");
    }
  
    updateUI() {
      this.questionContainer.innerHTML = this.quiz.getCurrentQuestion();
      this.attemptsElement.innerText = this.quiz.getAttempts();
      this.questionsLeftElement.innerText = this.quiz.getQuestionsLeft();
    }
  
    answerCheck() {
      const userAnswer = this.inputAnswer.value;
      this.welcomeContainer.classList.add("hidden");
      if (this.quiz.checkAnswer(userAnswer)) {
        this.successElement.classList.remove("hidden");
        this.errorElement.classList.add("hidden");
        console.log("Correct")
      } else {
        this.successElement.classList.add("hidden");
        this.errorElement.classList.remove("hidden");
        console.log("Incorrect")
      }
      this.updateUI();
      this.inputAnswer.value = "";  
      this.checkForGameEnd();
    }
  
    checkForGameEnd() {
      if (this.quiz.getQuestionsLeft() === 0) {
        const winModalContainer = document.getElementById("winModal");
        winModalContainer.classList.remove("hidden");
        winModalContainer.innerHTML += "<div class='modal-content'> <h3>!!! W I N N E R !!!</h3> <p>You have reached the end of the quiz! </p> <div>";
      }
    }
  }
  