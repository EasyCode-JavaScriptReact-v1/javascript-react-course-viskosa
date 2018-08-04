// какая-то логика
const helloUserName = (userName) => {
	console.log('hello', userName);
}

// и ее экспорт
module.exports = {
	helloUserName
}//уйдет в виде объекта

//module.exports = helloUserName; // можно так экспортировать, 
//тогда это уйдут сразу в виде функции, которой равна константа helloUserName



//чтобы этот модуль можно было куда-то подключить, обязательно пишем
// module.exports и что будем отсюда экспортировать

