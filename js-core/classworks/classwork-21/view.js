class View {
	constructor(initialState){
		this.data = initialState;
		this.elements = {
			addButton: document.querySelector('.controls__add'),
			input: document.querySelector('.controls__input'),
			listItems: document.querySelector('.list-items'),
		}
		this.render(initialState);
	}

	render(newData) {
		let converted = newData.map((item) => {
			return `<li>${item}</li>`;
		}).join('');

		this.elements.listItems.innerHTML = converted;//newData -> <li>
	}


}