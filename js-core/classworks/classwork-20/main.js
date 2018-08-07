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

//---------------------------------------
const btn = document.querySelector('button');
const btnAddUser = document.querySelector('#add');

const serverRequest = () => {
	const url = `http://easycode-js.herokuapp.com/pnv`;
	const xhr = new XMLHttpRequest();
	let parent =  document.querySelector('p');	
					//1
    const serverRequest = xhr.onreadystatechange = () => {	//2
        if (xhr.readyState === 4 && xhr.status === 200) {
        //if (xhr.readyState === XMLHttpRequest.DONE)	 тоже прокатит
            //console.log(xhr);
            console.log(xhr.responseText);
            parent.insertAdjacentHTML('beforeEnd', xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send(null);											//3
}

btn.addEventListener('click', () => {
	serverRequest();
})


const serverAddUser = (email, name) => {
	console.log(email, name);
	const url = `http://easycode-js.herokuapp.com/pnv/users`;
	const xhr2 = new XMLHttpRequest();
	xhr2.addEventListener('readystatechange', () => {
		
		if (xhr2.readyState === 4 && xhr2.status === 200) {
	        console.log(xhr2.responseText);
	        const user = {
				fullName: name,
				email: email
			};
	    }

	})

	/*const user = {
		fullName: name,
		email: email
	};*/

	console.log(user);
	xhr2.open('POST', url, true);
	xhr2.setRequestHeader('Content-type', 'application/json');//хотим отдать серверу JSON

	xhr2.send(JSON.stringify(user));// превращаем в JSON и передаем на сервер

}

btnAddUser.addEventListener('click', serverAddUser)
//--------------------------------

//const [myForm] = documents.forms;
const myForm = document.forms[0];// или так
//const button = document.querySelector('#create');

/*button.addEventListener('click', () => {
	event.preventDefault();
	if (!myForm.elements.fullName.value) { 
		//console.log('заполните фуллнейм')
		alert('заполните фуллнейм');
	};
	if (!myForm.elements.email.value) {
		//console.log('заполните email')
		alert('заполните email');
	};
		
})*/
//---так получше, вешаем сразу на всю форму----------------
myForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const {email, fullName} = myForm.elements;

	let validation = () => {

		let result = (!email.value ? false : true) ||
					(!fullName.value ? false : true);

		console.log(result);

/*		if (!email.value) { 
		alert('заполните фуллнейм');
		}; 
		if (!fullName.value) {
			alert('заполните email');
		};	
*/
	}
	if (validation()){
		console.log(1);
		serverAddUser(email.value, fullName.value);
	};

});
	
	/*const xhr3 = new XMLHttpRequest();

	xhr3.addEventListener('readystatechange', () => {
		
		if (xhr3.readyState === 4 && xhr3.status === 200) {
	        console.log(xhr3.responseText);
	    }

	})

	const user = {
		fullName: 'root root',
		email: 'qwe@ukr.net'
	};
	xhr3.open('POST', `http://easycode-js.herokuapp.com/pnv/users`, true);
	xhr3.setRequestHeader('Content-type', 'application/json');//хотим отдать серверу JSON

	xhr3.send(JSON.stringify(user));// превращаем в JSON и передаем на сервер

})*/

//-----------------------------------------------
/*const ajax = function(method, url, callback){
    var xhr4 = new XMLHttpRequest();
    xhr4.onreadystatechange = function(){
        if (xhr4.readyState === 4 && xhr4.status === 200) {
            //console.log(xhr);
            callback(xhr4.responseText);
        }
    }
    xhr4.open(method, url, callback);
	xhr4.setRequestHeader('Content-type', 'application/json');//хотим отдать серверу JSON

	xhr4.send(JSON.stringify(user));// превращаем в JSON и передаем на сервер
}

const request = function(){
	ajax('GET', 'http://easycode-js.herokuapp.com/pnv/users', response);
}

const response = function(arr){

	try {
		var arrAnswer = JSON.parse(arr); // парсим пришедший с сервера ответ
		console.log(arrAnswer);
	} catch (e) {
		console.log(e);
		return;
	}
	console.log(arr);
	//дальше работаем с arrAnswer
}*/

//request();
//теперь зарегистрировать в свой бд этого чувака-----------
