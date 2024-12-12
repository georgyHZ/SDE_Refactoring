import Quiz from '../assets/js/Quiz.js';  

//parts of the unit test are written by artificial intelligence

const questions = [
  {
    "question": "01101000 01100101 01101100 01101100 01101111", 
    "answer": "hello"
  },
  {
    "question": "01110111 01100101 01101100 01101011 01101111 01101101", 
    "answer": "welkom"
  }
];

describe('Quiz Class', () => {
  let quiz;

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    quiz = new Quiz(questions);  
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should always return the first question after initialization', () => {
    expect(quiz.getCurrentQuestion()).toBe("01101000 01100101 01101100 01101100 01101111");  
  });

  test('should return true for correct answer', () => {
    const correctAnswer = "hello"; 
    expect(quiz.checkAnswer(correctAnswer)).toBe(true);
  });

  test('should return false for incorrect answer', () => {
    const incorrectAnswer = "incorrect";
    expect(quiz.checkAnswer(incorrectAnswer)).toBe(false); 
  });
});
