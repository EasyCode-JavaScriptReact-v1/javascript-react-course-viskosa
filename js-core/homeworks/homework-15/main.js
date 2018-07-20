//TASK FROM PREVIOUS LESSON
/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве*/
let mySolution = function(arr) {

	let obj = arr.reduce((newItem, item) => {
		if (newItem[item]) {
			newItem[item] += 1;
		} else {
			newItem[item] = 1;
		}
		return newItem;
	}, {});

	let answer = [];
	let keys = Object.keys(obj);

	keys.forEach((item) => {
		if (obj[item] % 2 != 0) {
			answer.push(item);
		}
	})

	return answer;
}


console.log(mySolution([12, 23, 34, 12, 12, 23, 12, 45]))// -> [34 45]
console.log(mySolution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,])) //-> [4 100 5000]
console.log(mySolution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]))// -> [6 5 9 21]
console.log(mySolution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42])) //-> [8 16 23 42]
console.log(mySolution([2, 2, 44, 44]))// => []


//-------------------------------------------------------------------------------------
/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
*/
const solution = str => {
	let etalon = 'qwertyuioplkjhgfdsazxcvbnm';
	let etalonArr = etalon.split('');

	let filteredArr = etalonArr.filter((item) => {
		return str.includes(item);
	})

	if (filteredArr.length == etalonArr.length) {
		return true;
	} 
	return false;
};

console.log(solution("wyyga")) // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")) // true
console.log(solution("ejuxggfsts")) // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")) // true
console.log(solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv"))// true
console.log(solution("0123456789abcdefghijklmnop")) // false

//-------------------------------------------------------------------------------
/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
const flatten = arr => {};