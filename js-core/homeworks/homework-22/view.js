class View {
	constructor(initialState) {
		this.elements = {
			addButton: document.querySelector(".controls__add"),
			ul: document.querySelector(".list"),
			input: document.querySelector(".controls__input"),
			listItems: document.querySelector(".list")
		};

		let valuesArr = Object.values(initialState);
		let keysArr = Object.keys(initialState);

		this.render(valuesArr, keysArr);
	}

	render(values, keys) {
		let wrapToLi = values
			.map((item, i) => {
				let id = keys[i];
				return `
			<li class="list__item" data-id=${id}>
				<label class="label" data-edit="edit">${item}</label>
				<button class="complete" data-complete="complete">Mark complete</button>
				<button class="change" data-edit="edit">Edit</button>
				<button class="destroy" data-action="destroy">Delete</button>
			</li>`;
			})
			.join("");

		this.elements.listItems.innerHTML = wrapToLi; //values -> <li>
	}
}
