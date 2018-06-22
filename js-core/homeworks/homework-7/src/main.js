'use strict';
/*
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
 console.log('task 1 ----> ', add(10)(20)(30)); // 60
 //console.log(add(1)()(3)); // 6
 //console.log(add(10)(5)(15)); // 30


/*
 * TASK 2----------------------------------------------------------------
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
	let counter = 0;

	return {
		property1: 'one',
		property2: 2,
		method: function () {

			const myFunction = function(){
				return ++counter;
			}

			return myFunction();
		},
		clearCounter: function(){ //почему эта функция имеет доступ к counter из функции, описанной в свойстве method??? Хотя примерно понятно
			counter = 0; 
			return counter;
		}

	}
}

let test = patternModule(); // 0

console.log('task 2 ----> ',test.method()); //1
console.log('task 2 ----> ', test.method()); //2
console.log('task 2 ----> ', test.method()); //3
console.log('task 2 ----> ', test.clearCounter());
console.log('task 2 ----> ', test.method()); //1
console.log('task 2 ----> ', test.method()); //2
console.log('task 2 ----> ', test.method()); //3
console.log('task 2 ----> ', test.method()); //4
console.log('task 2 ----> ', test.method()); //5

/*
 * TASK 3-----------------------------------------------------------------
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект/////
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};


function methodCounter(obj, name, num, fn) {
	let newObj = obj;

	newObj.amount = num;
	newObj[name] = fn;

	console.log(newObj);
};

methodCounter(jun, 'logger', 3, adding);

/*methodCounter(jun, 'logger', 2, function (args) {});*/

let count = jun.amount;
const closure = function makeClosure(){
		return count--;
	}

const counter = closure;

//console.log(counter());

function adding(args){
	let arr = [...arguments];
	let qqq = counter();
	if (qqq > 0) {
		let sum = arr.reduce((newItem, item) => {
      			return newItem + item;
    		}, 0);
      		return `${sum}, У Вас осталось ${qqq} попыток`;
		} 
		return `ERROR ! add more methods, У Вас осталось ${qqq} попыток`;
	}

//должна одна и та же функция вызываться не более 3 раз, т.к. 3 передано в функцию

console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-2 ----> ',jun.logger(5, 5, 5, 5)); // 1, 20
console.log('task 3-3 ----> ',jun.logger(1, 2, 3, 4, 7, 10)); // 2, 27
console.log('task 3-4 ----> ',jun.logger(5, 5, 5, 5)); // 1, 20
console.log('task 3-5 ----> ',jun.logger(5, 5)); // ERROR ! add more methods

//jun2.addCounter(10, methodName);