/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве*/
  //console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]))// -> [34 45]
  //console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]))// -> [4 100 5000]
  //console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9])) //-> [6 5 9 21]
  //console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]))// -> [8 16 23 42]
  //console.log(solution([2, 2, 44, 44]))// => []


function solution(arr){

}


//------------------------------------------------------------
const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;


/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 */
class Parser {
	constructor(){
		this.result = '';
	}

	parseIt(str, shouldBeChanged, shouldChange) {
		if (!str.includes(shouldBeChanged)) {
			console.log('There is no matches') ;
			return this.result;
		}
		this.result = str.replace(shouldBeChanged, shouldChange);
		this.parseIt(this.result, shouldBeChanged, shouldChange);
		return this.result;
	}

}

let myParser = new Parser();
console.log(myParser.parseIt(someWebpackModule, '%%HOMEDIR%%', './JavaScript-Basic'));
console.log(myParser.parseIt(someWebpackModule, '%%APP_DIR%%', 'fixtures/src'));
console.log(myParser.parseIt(someWebpackModule, '%%APPNAME%%', 'app.js'));
console.log(myParser.parseIt(someWebpackModule, '%%HOME%%', './JavaScript-Basic'));//return 'There is no matches';

//----------------------------------------------------
/*class Parser {
	constructor(){
		this.result = '';
	}

	parseIt(str, arr) {
		//let [someWebpackModule, arr] = args;
		console.log(arr);


		arr.forEach((item) => {
			console.log(item.prev);
			if (!str.includes(item.prev)) {
				console.log('There is no matches') ;
				//return this.result;
			}

			this.result = str.replace(item.prev, item.next);
			this.parseIt(this.result, item.prev, item.next);
			//return this.result;

		})


	}

}

let myParser = new Parser();
console.log(myParser.parseIt(someWebpackModule, [
													{
														prev:'%%HOMEDIR%%', 
														next:'./JavaScript-Basic'
													},
													{
														prev:'%%APP_DIR%%', 
														next:'fixtures/src'
													}, 
													{
														prev:'%%HOME%%', 
														next:'.app.js'
													}
												]
											));*/
//console.log(myParser.parseIt(someWebpackModule, '%%APP_DIR%%', 'fixtures/src'));
//console.log(myParser.parseIt(someWebpackModule, '%%APPNAME%%', 'app.js'));
//console.log(myParser.parseIt(someWebpackModule, '%%HOME%%', './JavaScript-Basic'));//return 'There is no matches';
//--------------------------------------------------------------------

class app {
	constructor(){
		this.state = 0;
	}

	createElement(options) {

		let {node, className, typeAttr, nameAttr, idAttr, forAttr, actionAttr, methodAttr, valueAttr, nodeValue} = options;

		let elem = document.createElement(node);

		if (className) {
			elem.setAttribute('class', className);
		};

		if (typeAttr) {
			elem.setAttribute('type', typeAttr);
		};

		if (nameAttr) {
			elem.setAttribute('name', nameAttr);
		};

		if (idAttr) {
			elem.setAttribute('id', idAttr);
		};

		if (forAttr) {
			elem.setAttribute('for', forAttr);
		};

		if (actionAttr) {
			elem.setAttribute('action', actionAttr);
		};

		if (methodAttr) {
			elem.setAttribute('method', methodAttr);
		};

		if (valueAttr) {
			elem.setAttribute('value', valueAttr);
		};

		if (nodeValue) {
			elem.textContent = nodeValue;
		};

		return elem;
	}

	createQuestionItem(){
		let parent = this.createElement({node:'div', className:'question-item'});
		let input = this.createElement({node:'input', className:'checkbox', typeAttr:'checkbox', nameAttr:'checkbox1', idAttr:'checkbox1'});
		parent.appendChild(input);

		let label = this.createElement({node:'label', className:'label', forAttr:'checkbox1', nodeValue: 'Вариант ответа №1'})
		parent.appendChild(label);
		console.log(parent);
	}


	render() {
		//creating main tag
		let main = this.createElement({node:'main', className:'wrapper'});
		//creating title
		let h1 = this.createElement({node:'h1', className:'title', nodeValue:'Тест по программированию'});
		main.appendChild(h1);//может вынести в отдельный метод??

		//creating form
		let form = this.createElement({node:'form', actionAttr:'#', methodAttr:'post'});

		for (let i = 0; i < 3; i++) {
			
			//creating questions blocks
			let questionBlock = this.createElement({node:'div', className:'question-block'});
			let questionTitle = this.createElement({node:'p', className:'question-title', nodeValue:`${i+1}. Вопрос №${i+1}`});
			questionBlock.appendChild(questionTitle);

			for (let j = this.state; j < this.state + 3; j++) {// 0, 1, 2
				//creating question-item
				let questionItem = this.createElement({node:'div', className:'question-item'});
				let input = this.createElement({node:'input', className:'checkbox', typeAttr:'checkbox', nameAttr:`checkbox${j+1}`, idAttr:`checkbox${j+1}`});
				questionItem.appendChild(input);

				let label = this.createElement({node:'label', className:'label', forAttr:`checkbox${j+1}`, nodeValue: `Вариант ответа №${j+1}`})
				questionItem.appendChild(label);
				questionBlock.appendChild(questionItem);
			}
			this.state += 3;
			//console.log(questionBlock);

			form.appendChild(questionBlock);

		}

		let buttonWrap = this.createElement({node:'div', className:'submit-wrapper'});
		let button = this.createElement({node:'input', className:'submit', typeAttr: 'submit', valueAttr:'Проверить мои результаты'});
		buttonWrap.appendChild(button);
		form.appendChild(buttonWrap);
	
		main.appendChild(form);
		document.body.appendChild(main);
	}

}

const myDOM = new app();
myDOM.render();
