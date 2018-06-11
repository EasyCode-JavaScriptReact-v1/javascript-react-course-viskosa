/* TASK 1
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
* */
function showMeType(arg) {
	let res;
	//res = typeof arg === 'number' || typeof arg === 'object' ? true : false;
	//return res;
	if (typeof arg === 'number' || typeof arg === 'object') {
		res = true;
	};

	if (typeof arg === 'function') {
		res = false;
	};

	if (typeof arg === 'string' && arg.length != 10) {
		res = `Длина Вашей строки: ${arg.length}`;
	} else if (arg.length == 10) {
		res = `you win`;
	}

	return res;
}

function helper(){
	console.log('I am a helper');
};

console.log('task 1-1 ---->', showMeType(6));//true
console.log('task 1-2 ---->', showMeType([]));//true
console.log('task 1-3 ---->', showMeType({}));//true
console.log('task 1-4 ---->', showMeType(helper));//false
console.log('task 1-5 ---->', showMeType('012345'));//6
console.log('task 1-6 ---->', showMeType('0123456789'));//you win

//--------------------------------------------------------------------------------------------

/* TASK 2
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		arr[arr.length] = i;
	}
	return arr;
}

console.log('task 2-1 ---->', numbersBetween(3, 5));// 3, 4, 5
console.log('task 2-2 ---->', numbersBetween(10, 12));// 10, 11, 12
console.log('task 2-3 ---->', numbersBetween(4, 15));// 4,5,6,7,8,9,10,11,12,13,14,15

//------------------------------------------------------------------------------------------------

/* TASK 3
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(num) {
	let res = '';
	if (num % 3 == 0) {
		res += 'Fizz';
	};
	if (num % 5 == 0) {
		res += 'Buzz';
	};
	if (res.length == 0){
		return num;
	}
	return res;
}

function FizzBuzz100() {
	for (let i = 0; i <= 100; i++) {
		console.log('task 3 ----->', FizzBuzz(i)) ;
	}	
}

FizzBuzz100();

//-----------------------------------------------------------------------------
/* TASK 4
3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 

// let arr = [1, null, undefined, 'str', {}, [], function() {}];
*/

function showTypes(arr){
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res[res.length] = typeof arr[i];
	}
	return res;
}

let array = [1, null, undefined, 'str', {}, [], function() {}];

console.log('task 4 ---->', showTypes(array))

//---------------------------------------------------------------------

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

//let array = Array.from({length: 35},
//  (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
//);

function lookInObject(obj){
	for (let key in obj) {
		if (key == 'age' && isNaN(obj[key])) {
			obj.unknownAge = true;
		}

		return obj;
	}
}

function makeResultArray(arr) {
	let resultArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let key in arr[i]) {
			if (key == 'unknownAge') {
				resultArray[resultArray.length] = arr[i];
			}
		}
	}

	return resultArray;
}

function solution(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] != 'object') continue;

		let newElem = lookInObject(arr[i]);
		newArr[newArr.length] = newElem;
	}

	return makeResultArray(newArr);
}


let arr = [
	{
		age: '25',
		job: 'student'
	},
	{
		age: NaN,
		job: 'pilot'
	},
	{
		age: 40
	},
	12,
	'some string here',
	{
		age: NaN,
		job: 'student'
	},
];

console.log(solution(arr));
