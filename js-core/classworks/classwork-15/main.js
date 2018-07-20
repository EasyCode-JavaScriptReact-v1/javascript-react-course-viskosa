const questions = [
  {
    questionName: 'question 1',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [1]
  },
  {
    questionName: 'question 2',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [2]
  },
  {
    questionName: 'question 3',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswers: [1, 2]
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

    button.onclick = function(){//изменяем заголовок у второго вопроса
    		//console.log('clicked');
    		//questionsList.children[1].children[0].textContent = 'Вопрос 9999';

    		if (questionsList.children[1].children[0].textContent == 'Вопрос 9999') {
    			questionsList.children[1].children[0].textContent = 'Вопрос 2';
    		} else {
    			questionsList.children[1].children[0].textContent = 'Вопрос 9999';
    		};
    		console.log(questionsList.children[1].children[1].children[0].lastChild.checked);
    		let input = questionsList.children[1].children[1];
    		
        // по клику то чекед, то не чекед
    		input.children[0].firstElementChild.checked = !input.children[0].firstElementChild.checked;//toggle
    		input.children[2].firstElementChild.checked = !input.children[2].firstElementChild.checked;


    		for (let i = 0; i < questionsList.children.length; i++){
    			console.log(questionsList.children[i].children[1].children[1].firstElementChild);
    						questionsList.children[i].children[1].children[1].firstElementChild.checked;
    		}

			console.dir(questionsList);
    		for (let i = 0; i < questionsList.children.length; i++){
    			let title = questionsList.children[i].firstElementChild;
    			console.log(title);
    			title.setAttribute('style', 'background: red')
    		}

    		let titles = document.querySelectorAll('h3');//это не массив, а коллекция элементов, у нее нет методов массивов
                                                      //только for-ом можно пройти
        [...titles].forEach((item) => {               //но вот так можно превратить ее в массив
          item.setAttribute('style', 'background: green');  // и жизнь налаживается
        })
/*    		for (let i = 0; i < titles.length; i++){    //ну или фором
    			let title = titles[i];
    			//console.log(title);
    			title.setAttribute('style', 'background: green')
    		}*/

    		
    	}
    /*s
    *
    * this.renderQuestions()
    *
    * */
    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;

      const answers = this.newEl('ul');

      question.answers.forEach((answer, answerIndex) => {
        answers.appendChild(this.renderAnswer(answer, answerIndex));
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
    const li = this.newEl('li');
    const label = this.newEl('label');
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    label.setAttribute('for', uniqId);
    label.textContent = answer;

    const input = this.newEl('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', uniqId);

    li.appendChild(input);
    li.appendChild(label);
    return li;
  },
  newEl(elName) {
    return document.createElement(elName);
  }
};

app.render();