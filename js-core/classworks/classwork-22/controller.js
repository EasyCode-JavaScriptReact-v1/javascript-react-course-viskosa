function Controller(model, view){
	this.model = model;
	this.view = view;
	this.init();
}
Controller.prototype.init = function(){
	this.addHandlerForAddTask();
}

Controller.prototype.addHandlerForAddTask = function(){
	/*1. получить значение из инпута
	2. получить кнопку, к которой нужно добвить событие вью
	! 2.5 создать обработчик, который будет добавлять значение в модель
	3. повесить событие на кнопку
	4. положить значение в модель
	5. вызвать рендер с новым вью 
	*/
	let button = this.view.elements.addButton;

	button.addEventListener('click', this.addTask.bind(this));
}

Controller.prototype.addTask = function(){

	let value = this.view.elements.input.value;	
	if(!value) {
		return;
	}
	this.model.addTodoItem(value);
	this.view.render(this.model.data);
	this.view.elements.input.value = '';

}

