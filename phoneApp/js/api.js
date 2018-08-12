/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.
*/

/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.
/*
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер
add-user
*/

// Для PhoneBook сделайте отдельный репозиторий + gh-pages

// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс)
// который будет отправлять запросы
// доступ к этому сервису должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.cons

/*class Api {
	constructor(globalState){
		this.state = globalState;
	}

	getAllUsers() {
		const url = `http://easycode-js.herokuapp.com/pnv/users`
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE){
				console.log(xhr.responseText);
				this.state.people = JSON.parse(xhr.responseText);
			}
		}
		xhr.open('GET', url, true);
		xhr.send();
	}
}*/


const getPhoneUsersAPI = {
	getAllUsers(callback) {
		const url = `http://easycode-js.herokuapp.com/pnv/users`
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE){
				let users = (JSON.parse(xhr.responseText));
				callback(users);
			}
		}
		xhr.open('GET', url, true);
		xhr.send();
	}
}