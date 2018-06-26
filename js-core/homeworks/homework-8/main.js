'use strict';

/*
 * TASK 1----------------------------------------------
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 * */

function solution1() {
	let str = '';
	return function(value){
		return str += `${value} `;
	}
}

let stringBuffer = solution1();

console.log('task 1-1--->', stringBuffer('Замыкания')); // Замыкания
console.log('task 1-2--->', stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log('task 1-3--->', stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз

/*
 * TASK 2--------------------------------------------------
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, что все скобочки закрываются корректно
 * */
//
//если в строке нечетное количество символов, вернуть false
//
//
//
function validBraces(str) { /// тут не смогла вовремя выйти из рекурсии))
	let etalon = ['()','{}','[]'];
	let iterations = str.length /2;
	//console.log(iterations);
	if (str.length % 2 != 0) {
		return false;

	} else {

		etalon.some((item) => {

			if (str.includes(item)) {
				str = str.replace(item, '');
				if (str.length == 0){
					return str;
				};
				if (iterations > 1) {
					validBraces(str);
				};

			} else {
				return;
			}
			//return str;
		});

		console.log(str);
		if (str.length > 0) {
			return false
		} else {
			return true
		}

	}

}

//console.log('task 2-1--->', validBraces('(){}[]')); // => returns true
//console.log('task 2-2--->', validBraces('(}')); // => returns false
//console.log('task 2-3--->', validBraces('[(])')); // => returns false
console.log('task 2-4--->', validBraces('([{}])')); // => returns true
//console.log('task 2-5--->', validBraces('({[]})')); // => returns true
//console.log('task 2-6--->', validBraces('({[]}')); // => returns true

// @SUPER TASK 3 ---------------------------------------------------

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */

function sum(num) {

}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэш

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша


// TASK 4-------------------------------------------------------------------
//У нас есть массив объектов:

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];
//Обычно сортировка по нужному полю происходит так:

// по полю name (Вася, Маша, Петя)
users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});

// по полю age  (Маша, Вася, Петя)
users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});
//Мы хотели бы упростить синтаксис до одной строки, вот так:

users.sort(byField('name'));
users.forEach(function(user) {
  //alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  //alert( user.name );
}); // Маша, Вася, Петя


//То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

//Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.
function byField(field){		//возвращает функцию, которая принимает a и b
	return function(a, b) {		
		return a[field] > b[field] ? 1 : -1;
	}

}

//TASK 5 --------------------------------------
//Как в функции отличить отсутствующий аргумент от undefined?
// выведите 1, если первый аргумент есть, и 0 - если нет
function f(x) {
	let arr = [...arguments];
	if (arr.length) {
		return 1;
	} else {
		return 0;
	}
}

console.log('task 5-1--->',f(undefined)); // 1
console.log('task 5-2--->',f()); // 0

//TASK6 ---------------------------------------
//Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, 
//в который входят только те элементы arr, для которых func возвращает true.

//Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», 
//inArray([...]) – "в массиве [...]". Использование должно быть таким:
//filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
//filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

function filter(arr, callback){
	let filteredArr = [];
	for (let i = 0; i < arr.length; i++){
		let item = arr[i];
		let decision = callback(item);//сюда приходит function(item){
										//if (item >= start && item <= end) {
										//	return item;
										//}
										//return;
		if (decision) {
			filteredArr.push(item);
		}
	}
	return filteredArr;
}

function inBetween (start, end){	
		
	return function(item){
		if (item >= start && item <= end) {
			return item;
		}
		return;
	}

}

function inArray(arr){//[1, 2, 10]
	return function(item){//0
		return arr.indexOf(item) != -1;
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log('task 6-1--->', filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log('task 6-2--->', filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log('task 6-3--->', filter(arr, inArray([1, 2, 10])) ); // 1,2

//TASK 7  SHOOTERS----------------------------------
//Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

 function makeArmy() {

  	let shooters = [];

	  for (let i = 0; i < 10; i++) {

	    let shooter = function one() { // функция-стрелок //подсмотрела, разобралась
	    	console.log(one.num); // выводит свой номер
	    };
	    shooter.num = i;

	    shooters.push(shooter);
	  }

  	return shooters;
}

var army = makeArmy();// сюда приходит массив функций shooters
 console.log(army);

army[0](); // стрелок выводит 10, а должен 0
army[1](); // стрелок выводит 10...
army[5](); // стрелок выводит 10, а должен 0
army[7](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
//Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. 
//Предложите несколько вариантов исправления.