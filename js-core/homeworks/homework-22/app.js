/*Todo MVC - добавьте верстку любую. -> gh-pages

@Super-Front-END => рекомендую взять отсюда http://todomvc.com/

1. Переместите data в localStorage и инициализацию
View сделайте из localStorage;

// синхронизировать модель после изменения в модели

2. Добавьте возможность удаления элемента следуя паттерну MVC

3. Добавьте возможность редактирования элемента
СЛЕДУЯ ПРИНЦИПУ MVC.*/

/*(function init(){
	const initialState = (window.localStorage.length) > 0 ? window.localStorage : {};

	const model = new Model();
	const view = new View(initialState);
	const controller = new Controller(model, view)
})()*/

class App {
	constructor() {
		this.init();
	}

	init() {
		const initialState =
			window.localStorage.length > 0 ? window.localStorage : {};

		const model = new Model();
		const view = new View(initialState);
		const controller = new Controller(model, view);
	}
}

window.addEventListener("DOMContentLoaded", function() {
	new App();
});
