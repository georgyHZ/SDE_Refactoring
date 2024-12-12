export default class Quiz {
    constructor(questions) {
      this.questions = questions;  
      this.currentIndex = 0;
      this.attempts = 0;
      this.questionsLeft = questions.length;
      this.currentQuestion = null;
      this.selectRandomQuestion();
    }
  
    selectRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      this.currentQuestion = this.questions[randomIndex];
    }
  
    checkAnswer(userAnswer) {
      this.attempts += 1;
      if (userAnswer === this.currentQuestion.answer) {
        this.questionsLeft -= 1;
        this.questions.splice(this.questions.indexOf(this.currentQuestion), 1); 
        this.selectRandomQuestion();
        return true;  
      }
      return false;  
    }
  
    getCurrentQuestion() {
      return this.currentQuestion ? this.currentQuestion.question : null;
    }
  
    getQuestionsLeft() {
      return this.questionsLeft;
    }
  
    getAttempts() {
      return this.attempts;
    }
  }
  