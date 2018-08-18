function Controller(model, view) {
	this.model = model;
	this.view = view;
	this.init();
}
Controller.prototype.init = function() {
	this.addTaskHandler();
	this.removeTaskHandler();
	this.editTaskHandler();
	this.markCompleteHandler();
};

Controller.prototype.addTaskHandler = function() {
	/*1. получить значение из инпута
	2. получить кнопку, к которой нужно добвить событие вью
	! 2.5 создать обработчик, который будет добавлять значение в модель
	3. повесить событие на кнопку
	4. положить значение в модель
	5. вызвать рендер с новым вью 
	*/
	let addButton = this.view.elements.addButton;

	addButton.addEventListener("click", this.addTask.bind(this));
};

Controller.prototype.addTask = function() {
	let value = this.view.elements.input.value;
	if (!value) {
		return;
	}

	this.model.addItem(value);
	this.view.render(
		Object.values(window.localStorage),
		Object.keys(window.localStorage)
	);
	this.view.elements.input.value = "";
};

Controller.prototype.removeTaskHandler = function() {
	let parent = this.view.elements.ul;
	parent.addEventListener("click", this.removeTask.bind(this));
};

Controller.prototype.removeTask = function(e) {
	let target = e && e.target;
	if (target.dataset.action) {
		let shouldBeDeleted = target.parentNode.dataset.id;
		console.log(shouldBeDeleted);
		this.model.removeItem(shouldBeDeleted);
		this.view.render(
			Object.values(window.localStorage),
			Object.keys(window.localStorage)
		);
	}
};

Controller.prototype.editTaskHandler = function() {
	let parent = this.view.elements.ul;
	parent.addEventListener("click", this.editTask.bind(this));
};

Controller.prototype.editTask = function(e) {
	let target = e && e.target;
	if (target.dataset.edit) {
		let editedTask = prompt("Edit task, please", "");
		let shouldBeEdited = target.parentNode.dataset.id;
		if (editedTask === null) {
			return;
		}
		this.model.updateItem(shouldBeEdited, editedTask);
		this.view.render(
			Object.values(window.localStorage),
			Object.keys(window.localStorage)
		);
	}
};

Controller.prototype.markCompleteHandler = function() {
	let parent = this.view.elements.ul;
	parent.addEventListener("click", this.markComplete.bind(this));
};

Controller.prototype.markComplete = function(e) {
	let target = e && e.target;
	if (target.dataset.complete) {
		let shouldBeMarked = target.parentNode.firstElementChild;

		shouldBeMarked.classList.toggle("completed");
	}
};
