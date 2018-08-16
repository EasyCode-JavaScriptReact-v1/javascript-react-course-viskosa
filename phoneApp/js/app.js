/*ДЗ
Cделать phone-book
у которого будет:
1) Вы заполните пользователей на сервер по адресу с вашими инициалами.
2) При загрузке приложения, вы получите пользователей с сервера
3) В приложении будет js - роутер, (при смене страницы перезагрузки не будет)
4) При нажатии на пользователя будет открываться данный пользователь
5) Будет возможность добавить пользователя на сервере заполнив данные в форме (add-contact)
----------------   ~90 балов
Для тех кто хочет +500$ к зарплате на старте
6) Добавить удаление пользователей (2)
7) Должна быть модульная структура и Проект должен собираться при помощи webpack(2) (!)
8) Проект должен транспайлится через babel последние 2 версии браузеров (2) (!)
9) и после публикации на gh-pages, должен быть минифицирован(2)
10) добавьте еще одну первую страницу на которой будет "auth"
в этот инпут можно ввести инициалы easycode студента (2)
в зависимости от этого будут загружаться разные пользователи
*/

class App {
	constructor() {
		this.url = `https://easycode-js.herokuapp.com/pnv2/users`;	
		this.state = {
			//равен ссылке, которая ведет на объект
/*			people: [
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
			],*/
			activePage: "contacts",
			api: new Api(this.url)
		};


		this.pages = {
			contacts: new ContactsPage(this.state), // тут передали ссылку на this.state
			adduser: new AddUser(this.state),
			keypad: new KeypadPage(this.state),
			editcontact: new EditContact(this.state),
			user: new User(this.state),
			router: new Router(this.state),

		};

		this.pages.router.initializeRouter();
		this.pages.router.definePage(this.render.bind(this));
		this.appDOMNode = document.getElementById("app"); // сюда будем делать рендер всех страниц
		// и это не будет затрагивать футер и его события

/*		window.addEventListener('popstate'. event => { // не работает
			render(event.state);
		})*/
	}

	render(href) {
		const { activePage } = this.state;

		if (activePage == 'contacts') {
			let response = this.state.api.requestUsers();//сюда вернулся промис
			response
				.then(data => {
					this.state.people = data;
					this.completeRender(activePage);
				})
				.catch(error => console.log('error', error));

		} else {

			this.completeRender(activePage);
		}
	}

	completeRender(activePage) {
		const forHistory = this.pages[activePage].render(); 	
		this.appDOMNode.innerHTML = forHistory;				// и отрендерь ту страничку,
															// которая сейчас указана как activePage в this.state												
		this.pages[activePage].setHandlers(); 				//и навесь обработчики событий

		//window.history.pushState(forHistory, href, href) // ДОПИСАТЬ!!!

	}

	static initialize() {
		return new App().render();
	}
}

App.initialize();