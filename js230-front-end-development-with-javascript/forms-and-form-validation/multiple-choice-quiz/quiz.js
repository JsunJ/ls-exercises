const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

class Quiz {
  constructor(questions, answerKey) {
    this.questions = questions;
    this.answerKey = answerKey;
    this.questionHtml = document.getElementById('question_template');
    this.questionTmpl = Handlebars.compile(this.questionHtml.innerHTML);
    this.renderQuestions();
    this.registerListeners();
  }

  renderQuestions() {
    let fieldset = document.querySelector('form > fieldset');
    this.questions.forEach(question => {
      fieldset.insertAdjacentHTML('beforeend', this.questionTmpl(question));
    });
  }

  registerListeners() {
    let form = document.querySelector('form');
    let submitBtn = form.querySelector('.submit');
    let resetBtn = form.querySelector('.reset');

    form.addEventListener('submit', quizSubmitHandler.bind(this));
    form.addEventListener('reset', quizResetHandler.bind(this));

    function quizSubmitHandler(event) {
      event.preventDefault();
      this.checkAnswers();
      submitBtn.classList.add('disabled');
      submitBtn.disabled = true;
      resetBtn.classList.remove('disabled');
      resetBtn.disabled = false;
    }

    function quizResetHandler(event) {
      event.preventDefault();
      this.resetQuiz();
      submitBtn.classList.remove('disabled');
      submitBtn.disabled = false;
      resetBtn.classList.add('disabled');
      resetBtn.disabled = true;
    }
  }

  checkAnswers() {
    let form = document.querySelector('form');
    let submitter = document.querySelector('.submit');
    let formData = new FormData(form, submitter);
    let results = {};

    this.questions.forEach(question => {
      results[question.id] = formData.get(`${question.id}`) ? 
                             formData.get(`${question.id}`) : null;
    });

    Object.keys(results).forEach(key => {
      let givenAnswer = results[key];
      let trueAnswer = this.answerKey[key];

      if (givenAnswer === trueAnswer) {
        results[key] = true;
      } else if (givenAnswer === null) {
        return
      } else {
        results[key] = false;
      }
    });

    this.renderResults(results);
  }


  renderResults(resultsObj) {
    let questions = document.querySelectorAll('.question');
    questions.forEach(question => {
      let id = question.dataset.id;
      let resultText;
      let resultParagraph = question.querySelector('.result');

      if (resultsObj[id]) {
        resultText = 'Correct Answer';
        resultParagraph.innerText = resultText;
        resultParagraph.classList.add('correct');
      } else if (resultsObj[id] === null) {
        resultText = `You did not answer this question. Correct answer is: "${this.answerKey[id]}".`;
        resultParagraph.innerText = resultText;
        resultParagraph.classList.add('wrong');
      } else {
        resultText = `Wrong Answer. The correct answer is: "${this.answerKey[id]}".`;
        resultParagraph.innerText = resultText;
        resultParagraph.classList.add('wrong');
      }
    });
  }

  resetQuiz() {
    let inputs = document.querySelectorAll('input[type=radio]');
    let messages = document.querySelectorAll('.question .result');

    inputs.forEach(input => {
      input.checked = false;
    });

    messages.forEach(message => {
      message.innerText = '';
      message.classList.remove('correct', 'wrong');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Quiz(questions, answerKey);
});