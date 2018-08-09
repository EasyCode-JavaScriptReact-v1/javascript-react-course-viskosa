/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/
//-------------------------------------------------------------
/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/
Зарегистрируйте 10 пользователей с разными именами и email
И ТЕЛЕФОНАМИ! адресами (можно больше пользователей)
fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST
*/

const btn = document.querySelector('button');
const btnAddUser = document.querySelector('#add');
const urlForRequest = `http://easycode-js.herokuapp.com/pnv2/users`;

//------------------------------------------------
const serverGETRequest = (url, callback) => {
	const xhr = new XMLHttpRequest();	
	xhr.onreadystatechange = () => {	
		if (xhr.readyState === 4 && xhr.status === 200) {
			callback(xhr.responseText);		
		}
	};

	xhr.open('GET', url, true);		
	xhr.send(null);					
}

//------------------------------------------------
const serverPOSTRequest = (url, data) => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log(xhr.responseText); //в методе POST тут возвращается тот юзер, которого мы записали в базу 
		}
	};

	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(data);
}

//-----------------------------------------------------
const getUsersFromDB = (response) => {
	try {
		response;
	} catch(e) {
		console.log(e);
		return;
	}
	let parent =  document.querySelector('p');
	parent.insertAdjacentHTML('beforeEnd', response);
}

//-----------------------------------------------------
btn.addEventListener('click', () => {				
	serverGETRequest(urlForRequest, getUsersFromDB);	
})

btnAddUser.addEventListener('click', () => {
	let users = [
		{
			fullName: 'Sveta Sidorenko',
			email: 'svet@ukr.net',
			phone:12345678
		},
		{
			fullName: 'Ira Kulich',
			email: 'ira@ukr.net',
			phone:23456789
		},
				{
			fullName: 'Misha Mikhailenko',
			email: 'mixa@ukr.net',
			phone:34567890
		},
				{
			fullName: 'Oleg Samoilov',
			email: 'olega@ukr.net',
			phone:09876543
		},
				{
			fullName: 'Stas Soloviev',
			email: 'stas@ukr.net',
			phone:98765432
		},
				{
			fullName: 'Semen Semenov',
			email: 'semen@ukr.net',
			phone:87654321
		},
				{
			fullName: 'Nadia Nurri',
			email: 'nadja@ukr.net',
			phone:12345678
		},
				{
			fullName: 'Ivan Bocharnikov',
			email: 'bocha@ukr.net',
			phone:12345678
		},
				{
			fullName: 'Kirill Spokoinyj',
			email: 'kir@ukr.net',
			phone:12345678
		},
				{
			fullName: 'Eugene Timoshenko',
			email: 'jeka@ukr.net',
			phone:12345678
		}
		]

		users.forEach((item) => {	// наверное это неправильно слать по каждому юзеру запрос? Как добавить сразу всех?
			serverPOSTRequest(urlForRequest, JSON.stringify(item));
		})
	
})

//-------------------------------------------------------------
/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.
*/
//-------------------------------------------------------------
/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.
/*
//-------------------------------------------------------------
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер
add-user
*/
//-------------------------------------------------------------
// Для PhoneBook сделайте отдельный репозиторий + gh-pages
//-------------------------------------------------------------
// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс)
// который будет отправлять запросы
// доступ к этому сервису должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.