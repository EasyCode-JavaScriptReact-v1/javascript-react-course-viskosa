class App {
	constructor() {
		this.state = {
			//равен ссылке, которая ведет на объект
			people: [
				{
					name: "Иван",
					lastName: "Петров",
					email: "IvanPetrov@ec.ua"
				},
				{
					name: "Сергей",
					lastName: "Сергеев",
					email: "SergeiSergeev@ec.ua"
				},
				{
					name: "Иван",
					lastName: "Иванов",
					email: "IvanIvanov@ec.ua"
				},
				{
					name: "Александр",
					lastName: "Александров",
					email: "AlexAlex@ec.ua"
				},
				{
					name: "Алекс",
					lastName: "Смирнов",
					email: "AlexSmirnov@ec.ua"
				},
				{
					name: "Сергей",
					lastName: "Волков",
					email: "VolkovSergey@ec.ua"
				},
				{
					name: "Мария",
					lastName: "Шарапова",
					email: "MariyaSharapova@ec.ua"
				},
				{
					name: "Александр",
					lastName: "Винник",
					email: "AlexVinnik@ec.ua"
				},
				{
					name: "Дарий",
					lastName: "Смирнов",
					email: "DariySmirnov@ec.ua"
				},
				{
					name: "Елена",
					lastName: "Лещенко",
					email: "ElenaLeshenko@ec.ua"
				},
				{
					name: "Ольга",
					lastName: "Новикова",
					email: "OlgaNovikova@ec.ua"
				},
				{
					name: "Наталья",
					lastName: "Шемякина",
					email: "ShemyakinaN@ec.ua"
				},
				{
					name: "Анна",
					lastName: "Донцова",
					email: "AnnaDontsova@ec.ua"
				},
				{
					name: "Влад",
					lastName: "Яма",
					email: "VladYama@ec.ua"
				},
				{
					name: "Кира",
					lastName: "Воробьева",
					email: "Kira1990@ec.ua"
				},
				{
					name: "Виктор",
					lastName: "Кривенко",
					email: "ViktorKriv@ec.ua"
				}
			],
			activePage: "contacts",
 
		};
		//this.setState = this.changeState();
		this.pages = {
			contacts: new ContactsPage(this.state), // тут передали ссылку на this.state
			adduser: new AddUser(this.state),
			keypad: new KeypadPage(this.state),
			editcontact: new EditContact(this.state),
			user: new User(this.state),
			router: new Router(this.state)
		};

		this.pages.router.initializeRouter();
		this.pages.router.switchRouter();
		this.appDOMNode = document.getElementById("app"); // сюда будем делать рендер всех страниц
		// и это не будет затрагивать футер и его события
	}


 /*   changeState(value) {
    	console.log(this.state);

    	let currentState = this.state.activePage;

    	if (currentState != value) {
    		this.state.activePage = value;
    		this.renderNewPage();
    	}
    	return this.state.activePage;
    }*/


	renderNewPage() {
		this.appDOMNode.innerHTML = this.pages[this.state.activePage].render();
		this.pages[this.state.activePage].setHandlers();
	}

	render() {
		const { activePage } = this.state;
		//const activePage = this.state.activePage; 	// то же самое

		// this.updateView();
		this.appDOMNode.innerHTML = this.pages[activePage].render(); // и отрендерь ту страничку,
		this.pages[this.state.activePage].setHandlers();
		// которая сейчас указана как activePage в this.state
	}
}

const app = new App();
app.render();
