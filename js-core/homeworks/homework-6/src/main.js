 /** TASK 1
 * Посчитайте количество букв а, в передаваемом параметре
 *
 * */

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina',
};

let javaScript = {
  html: 'JavaScript',
};

function countLetterA(str) {
	let counter = 0;
	let arr = str.toLowerCase().split('');
	console.log(arr);
	arr.forEach((item) => {
		if (item == 'a') {
			counter++;
		};
	})

	return counter;
}

console.log('task 1-1 ---->', countLetterA(randomString)); // 4
console.log('task 1-2 ---->', countLetterA(user.name + javaScript.html)); // 3 //4
//------------------------------------------------------------------

/*
 *
 * TASK 2
 * Вам дано предложение, вам необходимо перевернуть каждое
 * слово в предложении в обратном порядке
 *
 * */
//1. Разбить предложение на массив по пробелу
//2. взять каждый элемент массива и тоже разбить на массив по ''
//3. Применить метод реверс на каждом слове
//4. Собрать получившийся массив опять в строку
function reverseEachWord(str) {
	let strArr = str.split(' ');
	let word = strArr.map((item) => {
		return item.split('').reverse().join('');
	})
	return word.join(' ');
}

console.log('task 2-1 ---->', reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
// uoY t'nod evah ot od gnihtyna laiceps ot nigeb gnisu eht .MOD tnereffiD sresworb evah tnereffid snoitatnemelpmi fo eht MOD

console.log('task 2-2 ---->', reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));
// ehT tnemucoD tcejbO ledoM )MOD( si a gnimmargorp ecafretni rof LMTH dna LMX stnemucod


/*
 * TASK 3
 * Добавьте в функцию reverseEachWord второй параметр,
 * данный параметр булево, если true - тогда предложение так же
 * переворачиваются в обратном порядке
 * */
function reverseEachWord2(str, boolean) {
	let strArr = str.split(' ');
	let word = strArr.map((item) => {
		return item.split('').reverse().join('');
	})
	if (boolean) {
		return word.reverse().join(' ');
	}
		return word.join(' ');
}

console.log('task 3-1 ---->', reverseEachWord2('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM', true));
//MOD eht fo snoitatnemelpmi tnereffid evah sresworb tnereffiD .MOD eht gnisu nigeb ot laiceps gnihtyna od ot evah t'nod uoY
console.log('task 3-2 ---->', reverseEachWord2('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
// stnemucod LMX dna LMTH rof ecafretni gnimmargorp a si )MOD( ledoM tcejbO tnemucoD ehT
console.log('task 3-3 ---->', reverseEachWord2('Hi my Name is', false));
// iH ym emaN si


/* TASK 4
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойства
 * это повторяющиеся слово,
 * а значение это количество повторений
 * */

// Both - Java - and - Java - Script - is - programming - and - programming - OOPBased
function wordCounter(sentence) {

}

console.log('task 4-1 ---->', 
  wordCounter('Both Java and Java Script is programming and programming OOPBased Language'),
);
/*
 {
 Both:1,
 Java:2,
 and:2,
 Script: 1,
 is: 1
 programming: 2
 OOPBased:1,
 Language:1
 }
 */

console.log('task 4-2 ---->', wordCounter('asd qwe asd'));
/*
 {
 asd:2
 qwe:1
 }
 * */

console.log('task 4-3 ---->', wordCounter('url http url www url http'));
/*
 {
 http:2,
 url:3,
 www:1
 }
 * */