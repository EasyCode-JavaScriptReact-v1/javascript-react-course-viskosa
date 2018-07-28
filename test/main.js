
/* ------------------------ТЕСТ------------------------------- */
/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса

const questions = [
  {
    questionName: 'Сколько типов данных существует в Javascript?',
    answers: ['Два', 'Пять', 'Там нет типов данных'],
    correctAnswersIndexes: [1]
  },
  {
    questionName: 'Что вернет typeof null?',
    answers: ['Object', 'null', 'undefined'],
    correctAnswersIndexes: [0]
  },
  {
    questionName: 'Метод slice() можно применить к:',
    answers: ['строкам', 'объектам', 'массивам'],
    correctAnswersIndexes: [0, 2]
  }
];

const app = {
  questions,
  testName: 'Тест по программированию',
  render() {
    const main = this.newEl('main');
    const testName = this.newEl('h1');
    testName.textContent = this.testName;
    const questionsList = this.newEl('ol');

    const button = this.newEl('button');
    button.setAttribute('type', 'submit');
    button.textContent= 'Проверить результаты';

    button.onclick = function(){

     const labels = document.querySelectorAll('label');
     const headers = document.querySelectorAll('h3');

      [...labels].forEach(label => {

         [...headers].forEach(header => {
            const newSpan = document.createElement('span');
            const headerStatus = findCorrectAnswer(label.textContent) 
              ? 'V'     //если true
              : 'Х';  //если false
            newSpan.textContent = headerStatus;
            header.insertAdjacentElement('afterEnd', newSpan);
         });

       })

    } //oncklick function ends

      const findCorrectAnswer = answerToValidate => {// Пять
      let correctAnswers = questions.map(question => //один объект
        question.correctAnswersIndexes.map(answerIndex => { //один из массива правильных ответов, в массиве стоят индексы правильных ответов// 2
          //console.log(question.answers[answerIndex]);
          return question.answers[answerIndex];//верни из массива ответов то значение, которое соответствует индексу из массива индексов

        })
      );

     return correctAnswers.some(answer => { //вернет true or false
        return answer.includes(answerToValidate);
      });

    }; 

/*    const findCorrectAnswer = answerToValidate => {// Пять
      let correctAnswers = questions.map(question => //один объект
        question.correctAnswersIndexes.map(answerIndex => { //один из массива правильных ответов, в массиве стоят индексы правильных ответов// 2
          //console.log(question.answers[answerIndex]);
          return question.answers[answerIndex];//верни из массива ответов то значение, которое соответствует индексу из массива индексов

        })
      );

     return correctAnswers.some(answer => { //вернет true or false
        return answer.includes(answerToValidate);
      });

    }; */


    /*
    * this.renderQuestions()
    * */

    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;
      questionHeader.style.cssText = 'display:inline-block; margin-right: 30px';

      const answers = this.newEl('ul');

      question.answers.forEach((answer, answerIndex) => {
        //answers.appendChild(this.renderAnswer(answer, answerIndex));
        answers.innerHTML += this.renderAnswer(answer, answerIndex);
      });

      li.appendChild(questionHeader);
      li.appendChild(answers);
      questionsList.appendChild(li);
    });

    main.appendChild(testName);
    main.appendChild(questionsList);

    main.appendChild(button);

    document.body.appendChild(main);
  },


  renderAnswer(answer, answerIndex) {
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;

    return `<li>
                <input type="checkbox" id="${uniqId}"></input>
                <label for="${uniqId}">${answer}</label>
            </li>`;
  },

  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render();

//-----------------------




/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик
* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*
* @Super-FRONT @ 2
* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */