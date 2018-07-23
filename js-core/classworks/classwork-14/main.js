let myRegularExpression = /i-love/;

//test - проверка на совпадение, true/false
console.log(myRegularExpression.test('i-love')); //true
console.log(myRegularExpression.test('i-lo')); //false

let newRegExp = new RegExp('somestring');
console.log(newRegExp); // вернет /somestring/

let testABC = /[A - C]/  //проверка всех символов в строке от а до с


//-------------------------------------------
//напишите ф-цию, кот будет проверять, является ли переданный аргумент словом javascript

function reg (str) {
	let regExp = /JavaScript/;
	console.log(regExp.test(str));
}

reg('JavaScript');
reg('JavaScri');

//или же так:----------------------
let es6 = (str) => /JavaScript/.test(str);
console.log('es6', es6);

//-------------------------
/*
флажки

i- делает регвыражение не зависящим от регистра
g- допускает совпадение со всеми экземплярами шаблона
m- мультилайн

*/

let superJS = 'JavaScript is Is is is awesome';
console.log(superJS.replace(/is/gmi, 'are'));//JavaScript are are are awesome

//напишите ф-цию, кото принимает аргумент superJS и оставляет только один is в выраженит

function deleteIs(str){
	console.log(str);
	//let mySecret = '%_%_%';
	let res = (str.toLowerCase().replace(/is /i, '%_%_%')//меняем один искомый is 
								.replace(/is /gmi, '') //удаляем все остальные
								.replace('%_%_%', 'is ')) 

	return res;
}

console.log(deleteIs(superJS));

// не----------------------------
//  /[^a-zA-Z]/ - найдет все, что не маленькие и не большие латинские буквы

//экранирование

//----------------- TRY-CATCH -----------------------------
//

try {
	qerqerwrtr % 10

	
} catch(e) {
	console.log(e);
}

console.log('код дальше работает')


//------конструктор ERROR------------------------------

