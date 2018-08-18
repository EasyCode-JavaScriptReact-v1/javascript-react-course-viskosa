class Model {
	constructor(initialState){
		this.data = initialState;
	}

	addTodoItem (newItem) {
		if (!newItem) {
			return;
		}

		this.data.push(newItem);	
	}

	removeItem(itemToRemove){
		const itemInData = this.data.indexOf(itemToRemove);
		if (itemInData === -1) {
			return;
		}
		this.data.splice(itemInData, 1)
	}

	updateTodoItem(oldItem, newItem) {
		let old = this.data.indexOf(oldItem);
		if (old === -1) {
			return;
		}		
		this.data.splice(old, 1, newItem);
	}

}