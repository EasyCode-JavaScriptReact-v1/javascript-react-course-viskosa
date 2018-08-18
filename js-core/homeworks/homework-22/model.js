class Model {
	constructor() {}

	addItem(newItem) {
		if (!newItem) {
			return;
		}
		let id =
			localStorage.length + "__" + Math.round(Math.random() * 1000000);

		window.localStorage.setItem(id, newItem);
	}

	removeItem(itemToRemove) {
		if (!itemToRemove) {
			return;
		}
		window.localStorage.removeItem(itemToRemove);
	}

	updateItem(oldItem, newItem) {
		if (!oldItem) {
			return;
		}
		window.localStorage[oldItem] = newItem;
	}
}
