/*TASK 1-----------------------------------------------------
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/

function returnObject(first, second) {
	let obj = {};

	obj.name = first;
	obj.age = second;

	return obj;
}

var someObject = returnObject('Oleg', 25);
console.log('task 1', someObject);


/* TASK 2-------------------------------------------------------
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function toUpperCase(obj) {
	let newObj = {};

	newObj.name = obj.name.toUpperCase();

	return newObj;
}

const objectWithName = { name: 'privet kak dela' };
console.log('task 2', toUpperCase(objectWithName));

/* TASK 3-----------------------------------------------------
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
  // без "естественных" способов добавления
  let arrLength = arrParam.length;
  //console.log(arrLength);

  arrParam[arrLength] = newElem;
}

addToArray(arr, 34);
addToArray(arr, 55);
console.log('task 3', arr);

/* TASK 4--------------------------------------------------------
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/

/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/

function simpleObjectGenerator(one, two, three) {
	let obj = {};
	obj.argument1 = one;
	obj.argument2 = two;
	obj.argument3 = three;
	
	return obj;
}
var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log('task 4 - 1', simpleObjectGenerator('protocol', { url: '22' }, 8000));
console.log('task 4 - 2', simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));


/*TASK 5-------------------------------------------------------------
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
	let obj = {};

	obj.newKey = newValue;

	if (userName.name) {
		obj.name = userName.name;
		return obj;
	} else {
		return 'Sorry, there is no "name" in object';
	}

}

console.log('task 5 - 1', addNameToUser('family', '%Lustenko%', myName));
console.log('task 5 - 2', addNameToUser('name', 'privet Pasha', {}));
/* {name:'Oleg', family:'%Lustenko%'} */

//console.log(myName);
/* {name:'Oleg'} */


/* @@ SUPER !----------------------------------------------------------------
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/
//the first solution----------------------------------
function fizzBuzz1(num) {

	if (num % 3 == 0 && num % 5 == 0) {
		console.log('FizzBuzz');
	} else if (num % 3 == 0) {
		console.log('Fizz');
	} else if (num % 5 == 0) {
		console.log('Buzz');
	} else {
		console.log(num);
	}
}

fizzBuzz1(1); // 1
fizzBuzz1(2); // 2
fizzBuzz1(3); // 'Fizz'
fizzBuzz1(5); // 'Buzz'
// ...
fizzBuzz1(15); // 'FizzBuzz'
fizzBuzz1(21); // 'Fizz'

//the second solution----------------------------------
function fizzBuzz2(num) {

	let answers = ['Fizz', 'Buzz'];
	let res;

	if (num % 3 == 0 && num % 5 == 0) {
		res = answers[0]+answers[1];
	} else if (num % 3 == 0) {
		res = answers[0];
	} else if (num % 5 == 0) {
		res = answers[1];
	} else {
		res = num;
	}

	return res;
}

console.log('------------->',fizzBuzz2(1)); // 1
console.log('------------->',fizzBuzz2(2)); // 2
console.log('------------->',fizzBuzz2(3)); // 'Fizz'
console.log('------------->',fizzBuzz2(5)); // 'Buzz'
// ...
console.log('------------->',fizzBuzz2(15)); // 'FizzBuzz'
console.log('------------->',fizzBuzz2(21)); // 'Fizz'

//the third solution----------------------------------
function fizzBuzz3(num) {

	let answers = {
		answ1: 'Fizz',
		answ2: 'Buzz'
	}

	if (num % 3 == 0 && num % 5 == 0) {
		console.log(answers.answ1+answers.answ2);
	} else if (num % 3 == 0) {
		console.log(answers.answ1);
	} else if (num % 5 == 0) {
		console.log(answers.answ2);
	} else {
		console.log(num);
	}
}

fizzBuzz3(1); // 1
fizzBuzz3(2); // 2
fizzBuzz3(3); // 'Fizz'
fizzBuzz3(5); // 'Buzz'
// ...
fizzBuzz3(15); // 'FizzBuzz'
fizzBuzz3(21); // 'Fizz'*/

//the fourth solution----------------------------------
function fizzBuzz4(num) {

	let answers = {
		answ1: 'Fizz',
		answ2: 'Buzz'
	}

	if (num % 3 == 0 && num % 5 == 0) {
		alert(answers.answ1+answers.answ2);
	} else if (num % 3 == 0) {
		alert(answers.answ1);
	} else if (num % 5 == 0) {
		alert(answers.answ2);
	} else {
		alert(num);
	}
}

let num = prompt('Enter a number, please', '');
fizzBuzz4(num);


/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/

function super2(arg1, arg2, arg3, callback) {
	let arr = [];

	arr[0] = arg1;
	arr[1] = arg2;
	arr[2] = arg3;

	callback(arr);
}

let cb = function(someArgs){
	console.log('task SUPER 2', someArgs);
}

super2(1, 2, 3, cb);