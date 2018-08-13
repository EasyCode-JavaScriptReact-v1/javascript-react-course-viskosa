//Сделайте 3 GET запроса, в каждом запросе получите ID, 
//когда 3 запроса будут выполнены отобразите на экране сумму всех ID 
//и имена(username) всех пользователей последовательно.

const usersId = [1,2,3];

const serverGETRequest = (id, callback) => {
	let url = `https://jsonplaceholder.typicode.com/users/${id}`;
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const users = JSON.parse(xhr.responseText);
			//console.log(users.id)
			callback(users);		// и вызываем коллбек, в который передаем ответ от сервера
		}
	};
	xhr.open('GET', url, true);	
	xhr.send(null);		
}

/*usersId.forEach((user) => {	//если так, то users.id в 13 строке выдает числа не по порядку, 
	serverGETRequest(user)	//а каждый раз в разном порядке
})*/

//поэтому надо делать callback hell:
serverGETRequest(1, user1 => {
	serverGETRequest(2, user2 => {
		serverGETRequest(3, user3 => {
			console.log(user1.id + user2.id + user3.id)	// 6
		})
	})
})

//------PROMISES-----------------------------

//Промис может находиться в 3-х состояниях:
//--- pending // запрос на выполнение промиса отправлен, ответа еще нет
//--- resolved // Пришел ответ, обработали ответ как и планировали, удачно
//--- rejected // Пришел ответ, обработали ответ как и планировали. ОШИБКА

const myProm = new Promise((resolve, reject) => {
  // Эта функция будет вызвана автоматически

  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
})

const myPromise = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve ({message: 'люблю тебя'})
	}, 5000);	

}).then(husband => {							//когда выполнится resolve, сделай console.log
	console.log(husband);
	console.log(husband.message + 'и я тебя');	//say - это результат выполнения resolve, называем как угодно
})												//через 5 секунд получим в консоли 'люблю тебя и я тебя'

//---------------------------------------------------------
const myPromise2 = new Promise((resolve, reject) => {

	setTimeout(() => {
		resolve ({message: 'люблю тебя'})
	}, 50);

	setTimeout(() => {
		reject ('обещать не значит...');
	}, 100)		// если тут время меньше, чем выше, то reject выполнится быстрее, чем resolve, 
				// и если есть последующие resolve, они не выполнятся
})
	.then(husband => {							
		console.log(husband.message + ' и я тебя');
		return {preparing: 'готовим свадьбу'}	// внутри одного then можем сделать return
	})
	.then(whatNext => {
		console.log(whatNext.preparing); // 'готовим свадьбу'
	})											
	.catch(error => {	// и выпадет в catch
		console.error('(-_-)', error); // 'обещать не значит...'
	})

//-------------------------------------------------------

function httpGet(url) {// пример из Кантора

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);				// resolve
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);						// reject
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));	// reject
    };

    xhr.send();
  });

}

httpGet("/article/promise/user.json")
  .then(
    response => alert(`Fulfilled: ${response}`),
    error => alert(`Rejected: ${error}`)
  );

//--------------FETCH--------------------------------------------  
//При вызове fetch возвращает промис, который, когда получен ответ, 
//выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался.
// Пример из Кантора:-------------------
//Объект response кроме доступа к заголовкам headers, статусу status и 
//некоторым другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.

//Варианты описаны в спецификации Body, они включают в себя:

//response.arrayBuffer()
//response.blob()
//response.formData()
//response.json()
//response.text()
//Соответствующий вызов возвращает промис, который, когда ответ будет получен, 
//вызовет коллбэк с результатом.

fetch('/article/fetch/user.json')
  .then(function(response) {
	    alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
	    alert(response.headers.get('Date'))
	    alert(response.status); // 200
	    alert(response.statusText);

	    return response.json();
   })
  .then(function(user) {
    	alert(user.name); // iliakan
  })
  .catch( alert );

//-------POST-запрос методом fetch----------------------------------
//http://easycode-js.herokuapp.com/ollu/users
fetch('/users', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		name: 'Hubot',
		login: 'hubot'
	})
})

//---------callback-hell можно переписать на fetch:-----------------
// тут выводим только одного юзера с id = 1:
let url = `https://jsonplaceholder.typicode.com/users/`;
const users = [1,2,3];

fetch(url + 1)
	.then(user => {
		return user.json();
	})
	.then(userJson => console.log(userJson));


//-----------------------------------------------------------------
// вывести троих пользователей последовательно

/*const usersPromise = users.map(user => {
	return fetch(url + user)
			.then(response => response.json())
			.then(userJson => console.log('userJson.name', userJson.name, userJson.id));//опять возвращает хаотично
})*/


const usersPromise = users.map(user => {
	return fetch(url + user)
			.then(response => response.json()) // тут у нас просто 3 запроса и 3 ответа, их нужно обработать
})

console.log(usersPromise); // вернет массив из трех промисов

//Promise.all возвращает еще один промис, но уже с готовыми данными, принимает массив промисов
// означает, что когда все промисы готовы, что-то сделай
// это ПЕРВЫЙ способ, как работать с несколькими промисами
Promise.all(usersPromise).then(allUsers => { //
	allUsers.forEach(user => {
		console.log(user.name, user.id);
	})
});

//-----ВТОРОЙ способ как работать с несколькими промисами- async await---------------
// но нужно оборачивать в try catch
const getUser = async () => {	// async означает, что внутри этой ф-ции будет выполняться асинхронный код
	try {
		const data = await fetch(url + 1); // await ждет, пока ф-ция закончится, и в const data присвоит рез-т ее выполнения
		const user = await data.json();

		console.log(user)
	} catch (e) {
		console.log(e) }
}

getUser();

//---та же функция на промисах----------------------------
const getUser2 = () => {
	return fetch( url + 1 )
		.then(data => data.json())
		.then(user => console.log(user))
}

getUser2();



//---------зарегать юзера-----------------------
let urlcode = `http://easycode-js.herokuapp.com/pnv/users`;

const newUser = {
		fullName: 'Hubot dfbgfg',
		email: 'hubot@gmail.com'
	};

fetch(urlcode, {
	method: 'POST',
	headers: {
				'Content-Type': 'application/json'
			 },
	body: JSON.stringify(newUser)
})
/*	.then(response => {				// then тут не нужен
		return response.json();
	})
	.then(user1 => console.log(user1));*/



