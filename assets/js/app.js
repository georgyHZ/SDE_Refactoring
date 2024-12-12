import Quiz from './Quiz.js';
import QuizUI from './QuizUI.js';

window.addEventListener('load', function () {
  const questions = questionsEasy;

  const quiz = new Quiz(questions);

  const quizUI = new QuizUI(quiz);

  quizUI.updateUI();
});
