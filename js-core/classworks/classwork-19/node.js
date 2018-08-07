//console.log('Hello world Node.js');
//здесь консоль лог не такой, как в браузере, он специальный, 
//чтобы отображать его в командной строке или терминале

/*const helloUserName = (userName) => {
	console.log('hello', userName)
}*/ // эту логику перенесли в helloUser.js

//const myModule = require('./helloUser');

//console.log(myModule);	//если там передали в виде объекта, то получим
//{ helloUserName: [Function: helloUserName] }
// т.е. myModule - это у нас объект, у которого есть свойство helloUserName

//если там передали в виде module.exports = helloUserName, то тут получим сразу функцию, 
//которой равна константа helloUserName

//console.log(myModule.helloUserName);//если там передали в виде объекта, 
									//то тут получим сам метод [Function: helloUserName]

//myModule.helloUserName('Oleh');// выполняем эту ф-цию с аргументом 'Oleh'
//myModule('Oleh');

//-------------------------------------------------------------
//можем писать через деструкцию:
//если там передаем в виде объекта, то тут можем вытащить только то, 
//что нам нужно из того объекта, а именно метод helloUserName.Деаем так:

const {helloUserName} = require('./helloUser'); //такой метод предпочтительнее, тут мы сразу 
												//зареквайрили весь объект, у которого есть метод helloUserName
												//и взяли из объекта только этот метод. Это лучше, потому что 
												//не запутаешься с названиями

												//расширения .js .json можно не дописывать, остальные надо дописывать
console.log(helloUserName); //тут получим сам метод [Function: helloUserName]

helloUserName('Tolik');

//----------------math.js-----------------------------------
const {add} = require('./math');

add(1, 2);