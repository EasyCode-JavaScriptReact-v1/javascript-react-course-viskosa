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
