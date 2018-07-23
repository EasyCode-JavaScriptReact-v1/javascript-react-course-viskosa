/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

solution = arr => {
	let counter = 0;
	let resultArray = [];

	while (counter != arr[0].length) {

		let smallArray = arr.map(item => { // [1, 'a']
			return item[counter];
		})

		resultArray.push(smallArray);
		counter++;
	}

	return resultArray;

}

//console.log(solution([ [1, 'a'], [2, 'b'], [3, 'c'] ])) //=> [ [1, 2, 3], [a, b, c] ];
//console.log(solution([ [1, 3, 5], [2, 4, 6] ])) //=> [ [1, 2], [3, 4], [5, 6] ];
//console.log(solution([[]]))// => []
//console.log(solution([ [ [ ] ] ])) // = [ [] ]

//----------------------------------------------------------------------
/*
/*
<h1>Main</h1>/////
<ul>
  <h1>Catalog</h1>////
  <li>
    <ul>
      <h1>Comp</h1>////
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>

 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul -> li
 Используйте innerHTML
 */

const navigation = [
  {name: 'Главная'},
  {name: 'Каталог', //h1
   children: [ //ul
		      	{name: 'Компьютеры',//h1
		        children: [ //li -> ul 
		        		{name: 'Ноутбуки'}, //li h1
		        		{name: 'Планшеты'} //li h1
		        	]
		      	}
    		 ]
  },
  {name: 'Профиль'}
];

const visualArray = arr => {
	arr.forEach(item => { 

		for (let key in item) {

			if (key == 'name') {
				document.body.innerHTML += `<h1>${item.name}</h1>`;
			};

			if (key == 'children') {
				const map = item[key].map(child => {

					let res = '<ul>';

					for (let key1 in child) {

						if (key1 == 'name') {
							res += `<h1>${child[key1]}</h1>`;
						};

						if (key1 == 'children') {
							res += `<ul>
										<li>${child[key1][0].name}</li>
										<li>${child[key1][1].name}</li>
									<ul>`
						}

					}
					res += '</ul>';
					return res;
				})

				document.body.innerHTML += map;
			}

		};

	})
};
visualArray(navigation);

//--------------------------------------------------------------------
/* ТЕСТ */

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