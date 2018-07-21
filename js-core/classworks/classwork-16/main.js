const questions = [
  {
    questionName: 'вопрос 1',
    answers: ['answer 1.1', 'answer 1.2', 'answer 1.3'],
    correctAnswersIndexes: [1]
  },
  {
    questionName: 'вопрос 2',
    answers: ['answer 2.1', 'answer 2.2', 'answer 2.3'],
    correctAnswersIndexes: [2]
  },
  {
    questionName: 'вопрос 3',
    answers: ['answer 3.1', 'answer 3.2', 'answer 3.3'],
    correctAnswersIndexes: [1, 2]
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
    /*
    * this.renderQuestions()
    * */
    this.questions.forEach(question => {
      const li = this.newEl('li');
      const questionHeader = this.newEl('h3');
      questionHeader.textContent = question.questionName;

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
/*    const li = this.newEl('li');
    const label = this.newEl('label');
    const uniqId = `uniq_${Math.random()}_${answerIndex}`;
    label.setAttribute('for', uniqId);
    label.textContent = answer;

    const input = this.newEl('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', uniqId);

    li.appendChild(input);
    li.appendChild(label);
    return li;*/

  //-----перепишем на innerHTML-----------------------------
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

//----------------CLASSWORK 16---------------------------
const main = document.querySelector('main');
const span = document.createElement('span');

span.textContent = 'SPAN';

document.body.insertBefore(span, main);


//-----------------------
//добавить кнопку 
//по клику на кнопку перед каждым ответом вставить something
let newButton = document.createElement('button');
newButton.textContent = 'NEW BUTTON';
newButton.style.cssText = 'display:block; margin: 30px';

main.appendChild(newButton);

/*
* Все вопросы в DOM
* проходимся по каждому вопросу
* questions[DOMIndexQuestion]
* labelIndex
*
* */
// label - 'answer 1.2'
// question.correctAnswers.includes(label) -- CORRECT

const findCorrectAnswer = answerToValidate => {
  let correctAnswers = questions.map(question =>
    question.correctAnswersIndexes.map(answerIndex => {
      return question.answers[answerIndex];
    })
  );
  // correctAnswersIndexes: [1] before
  // correctAnswersIndexes: ['answer 1.2'] after

  return correctAnswers.some(answer => {
    return answer.includes(answerToValidate);
  });
}; 

newButton.onclick = () => {
  //по клику на кнопку перед каждым ответом вставить something
  let ul_s = document.querySelectorAll('ul');//3

  [...ul_s].forEach((item) => {

      let li_s = item.querySelectorAll('li');

      [...li_s].forEach((value) => {
        let something = document.createElement('span');
        something.textContent = 'something';
        item.insertBefore(something, value);
      })

  })

  //по клику на кнопку возле каждого инпута вставить correct или incorrect 
  //на основании значения correctAnswers из массива questions:

     const labels = document.querySelectorAll('label');

     [...labels].forEach(label => {
        const newSpan = document.createElement('span');

        const labelStatus = findCorrectAnswer(label.textContent)
          ? 'CORRECT'
          : 'INCORRECT';
      newSpan.textContent = labelStatus;
      label.parentElement.insertBefore(newSpan, label);
        //console.log(findCorrectAnswer(label.textContent));
     })
  

    //----insertAdjacentHTML, insertAdjacentElement----------------------

    const body = document.body;

    main.insertAdjacentElement('afterBegin', newButton);

    //-----innerHTML----------------------------------------------------
    //берет или вставляет содержимое тега (то, что написано внутри тега, 
    //включая вложенные теги, если они там есть)

    //-----outerHTML----------------------------------------------------
    //берет или вставляет содержимое тега (то, что написано внутри тега, 
    //включая вложенные теги, если они там есть, и еще и сам себя покажет)

    //добавьте к бади что-то через innerHTML

    body.innerHTML += `<div>some inner html</div>`;

    //--добавьте список ниже текста---------
    const javaScriptOneLove = [
      'Arrow',
      'Closures',
      'Classes'
    ];

    let createList = arr => {
      const renderItems = arr.map(item => 
         `<li>${item}</li>`
        ).join('');

      return `<ul>
                ${renderItems}
              </ul>`
    }

    body.innerHTML += createList(javaScriptOneLove);

}//end of onclick function

