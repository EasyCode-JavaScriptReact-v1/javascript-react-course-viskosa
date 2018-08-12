//-----------------------------------------------------

const usersId = [1,2,3];

const serverGETRequest = (id, callback) => {
	let url = `https://jsonplaceholder.typicode.com/users/${id}`;
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const user = JSON.parse(xhr.responseText);
			callback(user);		// и вызываем коллбек, в который передаем ответ от сервера
			//console.log(user);
		}
	};
	xhr.open('GET', url, true);	
	xhr.send(null);		
}

serverGETRequest(1, (user1) => {
	serverGETRequest(2, (user2) => {
		serverGETRequest(3, (user3) => {
			console.log(user1.id + user2.id + user3.id)
		})
	})
})

//------PROMISES-----------------------------

//Промис может находиться в 3-х состояниях:
//--- pending // запрос на выполнение промиса отправлен, ответа еще нет
//--- resolved // Пришел ответ, обработали ответ как и планировали, удачно
//--- rejected // Пришел ответ, обработали ответ как и планировали. ОШИБКА

const myProm = new Promise((resolve, reject) => {

})

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('люблю тебя')
	}, 5000);	
}).then(say => {	//когда выполнится resolve, сделай console.log
	console.log(say + 'и я тебя');	//say - это результат выполнения resolve, называем как угодно
})	//через я секунд получим в консоли 

//---------------------------------------------------------
let url = `https://jsonplaceholder.typicode.com/users/`;
const users = [1,2,3];
/*fetch(url + 1)
	.then(response => {
		return response.json();
	})
	.then(user1 => console.log(user1.name))
*/

const usersPromise = users.map(user => {
	return fetch(url + user).then(response => response.json());
})

Promise.all(usersPromise).then(allUsers => {
	allUsers.forEach(user => {
		console.log(user.name);
	})
});
console.log(usersPromise);

const getUser = async () => {
//	try {
		const data = await fetch(url + 1);
		const user = await data.json();

		console.log(user)
/*	} catch {(e => {
		console.log(e)
	})*/

}

getUser();
//--------------------------------
let urlcode = `http://easycode-js.herokuapp.com/pnv/users`;
fetch(urlcode, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		fullName: 'Hubot dfbgfg',
		email: 'hubot@gmail.com'
	})
})
	.then(response => {
		return response.json();
	})
	.then(user1 => console.log(user1))

fetch(urlcode)
.then(response => {
		return response.json();
	})
	.then(user1 => console.log(user1))



