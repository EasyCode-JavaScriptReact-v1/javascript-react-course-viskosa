//add-user при клике:
//index.html/contacts.html - в поле search при вводе буквы,
//добавить поиск по имени если имя включает хотя бы одну эту букву.
//после ввода каждого символа, фильтровать отображаемых пользователей.
//При удалении всех символов отобразить снова весь список

class AddUser {
	constructor(globalState) {
		this.state = globalState; //стал равен this.state-у со страницы App.js
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

	addUser() {

		const {name, lastName, email, phone} = this.form.elements;  // name, lastName, email, phone - атрибуты name у элементов формы

		if (!name.value) { 	
			alert('заполните name');
			return;
		}; 
		if (!lastName.value) { 	
			alert('заполните Last Name');
			return;
		}; 
		if (!email.value) { 	
			alert('заполните email');
			return;
		}; 
		if (!phone.value) {	
			alert('заполните phone');
			return;
		};	

		let fullName = `${name.value} ${lastName.value}`;

		this.state.api.postUser([fullName, email.value, phone.value]);

		this.clearFields();

	}

	clearFields() {
		let myFormElements = this.form.elements;

		[...myFormElements].forEach((item) => {
			if (item.tagName === 'INPUT') {
				item.value = '';
			}
		})
	}

	renderInfo(options) {
		let { placeholder, name } = options;
		return `<div class="edit-field">
				<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
					<input type="text" placeholder="${placeholder}" name="${name}"></input>
				</button>
			</div>`;
	}

	setHandlers() {
		this.buttonsHandler();
		this.addButton = document.querySelector(".done-btn");
		this.deleteButton = document.querySelector(".delete-contact");
		this.form = document.forms[0];
		this.form.addEventListener('submit', event => {
			event.preventDefault();
		})
		this.addButton.addEventListener('click', this.addUser.bind(this));
		this.deleteButton.addEventListener('click', this.clearFields.bind(this));
	}

	render() {
		return `<header class="header">
			<div class="container top-radius">
				<nav class="user-top-line">
					<a href="user.html">Cancel</a>
					<button class="done-btn">Done</button>
				</nav>
			</div>
		</header>

		<main class="main">
			<div class="container">
				<form action="#" method="post">
					<div class="edit-main-info">
						<div class="edit-foto">
							<button class="add-foto-btn">
								<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add foto</span>
							</button>
						</div>
						<div class="main-info-holder">
							${this.renderInfo({ placeholder:"First Name", name:"name"})}
							${this.renderInfo({ placeholder:"Last Name", name:"lastName"})}
							${this.renderInfo({ placeholder:"Company", name:"company"})}
						</div>
					</div>
					<div class="scroll-holder">
						<div class="edit-info">
							${this.renderInfo({ placeholder:"add mobile phone", name:"phone"})}
							${this.renderInfo({ placeholder:"add home phone", name:"homePhone"})}
							${this.renderInfo({ placeholder:"add email", name:"email"})}
							${this.renderInfo({ placeholder:"add address", name:"address"})}
							${this.renderInfo({ placeholder:"add birthday", name:"birthday"})}
							${this.renderInfo({ placeholder:"add social profile", name:"profile"})}
							${this.renderInfo({ placeholder:"add field", name:"field"})}
							<div class="edit-field">
								<button href="#" class="delete-contact">delete contact</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>`;
	}
}