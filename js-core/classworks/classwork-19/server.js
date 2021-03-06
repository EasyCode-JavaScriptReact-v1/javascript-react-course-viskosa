const http = require('http');
const fs = require('fs');

/*http
	.createServer((request, response) => {
		response.end('HELLO WORLD');//закрой все соединение и отправь в него 'HELLO WORLD'
		console.log('111');// это покажется 2 раза, т.е. идет 2 запроса - на localhost
						// и на favicon.ico
		console.log('url', request.url);
		console.log('headers', request.headers);
		//console.log('response', response);
	})
	.listen(3000, err => {
		console.log('server started on 3000');
	})*/

//request происходит при открытии или обновлении страницы

//------------------------------------------------------
//отобразить на локалхост 3000 страничку index.html
//описываем все сценарии. Если он выполнился - отдаем данные и закрываем соединение
//решение в лоб--------------------
/*http
	.createServer((request, response) => {	//создаем сервер
		const index = fs.readFileSync('./index.html');
		console.log(request.url);

		if (request.url === '/main.js'){
			const file = fs.readFileSync('./main.js');
			response.end(file);
		}

		if (request.url === '/img/1.jpg'){
			const img = fs.readFileSync('./img/1.jpg');
			response.end(img);
		}

		response.end(index);
	})
	.listen(3000, err => {	// запускаем сервер
		console.log('server started on 3000');
	})
*/
//----------с упрощением-----------------------

/* ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла*/

http
	.createServer((request, response) => {
		//const index = fs.readFileSync('./index.html');//сначала читаем файл index.html
		let url = request.url;
		if (url == '/') {
			url = '/index.html';
		}
		console.log(url);

		try {

			let file = fs.readFileSync(`.${url}`);
			response.end(file);

		} catch (err) {
			if (err.code == 'ENOENT') {
				console.log(`${url} does not exist`)
			} else {
				console.log('some other error');
			}
		}

	/*if (!fs.statSync(`.${request.url}`).isDirectory()) {
			const file = fs.readFileSync(`.${request.url}`);
			response.end(file);
			return;
		}*/

		response.end('NOT FOUND', 404);//закрой все соединение и отправь в него файл index
	})
	.listen(3000, err => {
		console.log('server started on 3000');
	})
