//edit-contact,
//- сделать данные редактируемыми (атрибут contentEditable) // input
//- изменять backgroundColor

class EditContact {
	constructor(globalState) {
		this.state = globalState; //стал равен this.state-у со страницы App.js
		this.phoneNumber = "+38 (063) 733 44 55";
	}

	renderInfo(value) {
		return `<div class="edit-field">
				<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
					<input type="text" placeholder="${value}"></input>
				</button>
			</div>`;
	}

	buttonsHandler() {
		let buttonsParent = document.querySelector("main");
		buttonsParent.addEventListener("click", this.clickHandler.bind(this));
	}

	clickHandler(e) {
		let target = e && e.target;
		if (!target) return;

		if (target.tagName === 'INPUT') {
			target.classList.add('active-input');
		}

		target.addEventListener("blur", () => {
			target.classList.remove('active-input');
		});
	}

	setHandlers() {
		this.buttonsHandler();
	}

	render() {
		return `<header class="header">
			<div class="container top-radius">
				<nav class="user-top-line">
					<a href="user.html">Cansel</a>
					<button type="submit" form="edit-contact" formaction="#" formmethod="get" class="done-btn">Done</button>
				</nav>
			</div>
		</header>

		<main class="main">
			<div class="container">
				<div class="edit-main-info">
					<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
					<div class="main-info-holder">
						${this.renderInfo("First Name")}
						${this.renderInfo("Last Name")}
						${this.renderInfo("Company")}
					</div>
				</div>
				<div class="scroll-holder">
					<div class="edit-info">
						<div class="edit-field">
							<button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
								<span>phone</span>
								<span>${this.phoneNumber}</span>
							</button>
						</div>
						${this.renderInfo("add home phone")}
						${this.renderInfo("add email")}
						${this.renderInfo("add address")}
						${this.renderInfo("add birthday")}
						${this.renderInfo("add social profile")}
						${this.renderInfo("add field")}
						<div class="edit-field">
							<button href="#" class="delete-contact">delete contact</button>
						</div>
					</div>
				</div>
			</div>
		</main>`;
	}
}