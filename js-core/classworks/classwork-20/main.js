//-----ПРИМЕР ИСПОЛЬЗОВАНИЯ XHR С КОЛЛБЕКОМ----------------------

/*let ajax = function(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            //console.log(xhr);
            callback(xhr.responseText);
        }
    }
    xhr.open(method, url, callback);
    xhr.send(null);
}

let request = function(){
	ajax('GET', '/site/tryCurrency', response.bind(this));
}

response = function(arr){
	try {
		var arrAnswer = JSON.parse(arr); // парсим пришедший с сервера ответ
		console.log(arrAnswer);
	} catch (e) {
		console.log(e);
		return;
	}

	//дальше работаем с arrAnswer
}*/

//-----Сделать GET запрос на сервер и отобразить вернувшуюся информацию-------
//  РЕЗУЛЬТАТ ЗАПРОСА ЗАПШИТЕ В тэг <p> в HTML

const btn = document.querySelector('button');
const btnAddUser = document.querySelector('#add');
const urlForRequest = `http://easycode-js.herokuapp.com/pnv/users`;

//------------------------------------------------
const serverGETRequest = (url, callback) => {
	const xhr = new XMLHttpRequest();	//	1 - сначала создаем экземпляр запроса
	xhr.onreadystatechange = () => {	//  4 - по onreadystatechange выполняем нужные действия
		if (xhr.readyState === 4 && xhr.status === 200) {
		//if (xhr.readyState === XMLHttpRequest.DONE) {	// или можно так проверять
			callback(xhr.responseText);		// и вызываем коллбек, в который передаем ответ от сервера
		}
	};
	xhr.open('GET', url, true);		//  2 - открываем соединение
	xhr.send(null);					//  3 - отправляем запрос
}

//------------------------------------------------
const serverPOSTRequest = (url, data, callback) => {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			//console.log(xhr.responseText); //в методе POST тут возвращается тот юзер, которого мы записали в базу 
			if (callback) {
				callback(xhr.responseText);
			}
		}
	};

	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-type', 'application/json'); // устанавливаем заголовки -
															  // хотим отдать серверу JSON
	xhr.send(data);// превращаем в JSON и передаем на сервер
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
	//let answer = JSON.parse(response);	//парсим ответ, если нужно, и потом с ним дальше работаем
	parent.insertAdjacentHTML('beforeEnd', response);
}

//----------------------------------------------------

const createUser = (name, email) => {
	let user;
	if (name && email) {
		user = {
				fullName: name,
				email: email
			}
	} else {
		user = {
			fullName: 'Sveta Sidorenko',
			email: 'svet@ukr.net'
		}
	}

	console.log(user);
	console.log(JSON.stringify(user));	
	return JSON.stringify(user);

}

//-----------------------------------------------------
btn.addEventListener('click', () => {					//  по клику на кнопку отправляем запрос
	serverGETRequest(urlForRequest, getUsersFromDB);	//  и передаем url, на который слать запрос
})

btnAddUser.addEventListener('click', (name, email) => {
	serverPOSTRequest(urlForRequest, createUser(name, email));
})

//---------------ФОРМЫ--------------------------------------
const myForms = document.forms;	//получаем все формы с документа, псевдомассив
//const [myForms] = document.forms  // или так - сразу делаем из псевдомассива массив
const myForm = document.forms[0]; //обращаемся к первой форме в документе
//myForm.elements // - обращение ко всем элементам формы

myForm.addEventListener('submit', (event) => {	// вешаем собыие сразу на всю форму
	event.preventDefault();	// чтобы не сразу отправлялись данные, а после необходимых нам проверок

	const {email, fullName} = myForm.elements;  // email, fullName - атрибуты name у элементов формы
								// здесь обратились только к инпутам с name="email" и name="fullName"
	if (!email.value) { 	// если в поле email нет значения 
		alert('заполните email');
	}; 
	if (!fullName.value) {	// если в поле fullName нет значения 
		alert('заполните fullName');
	};	

	serverPOSTRequest(urlForRequest, createUser(fullName.value, email.value));

});
	
