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

/*function countLetterA(str) {
	let counter = 0;
	let arr = str.toLowerCase().split('');
	console.log(arr);
	arr.forEach((item) => {
		if (item == 'a') {
			counter++;
		};
	})

	return counter;
}*/

function countLetterA(str) {
  let arr = str.toLowerCase().split('');
  let counter = arr.reduce((newItem, item) => {
    if (item == 'a') {
      newItem++;
    };
    return newItem;
  }, 0);

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
function reverseEachWord2(str, shouldSentenceBeReversed) {
	let strArr = str.split(' ');
	let word = strArr.map((item) => {
		return item.split('').reverse().join('');
	})
	if (shouldSentenceBeReversed) {
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
	let arr = sentence.split(' ');
	let obj = arr.reduce((newItem, item) => {
		let sentenceItem = item;
		let counter = 0;

		arr.forEach((item) => {
			if (sentenceItem === item) {
				counter++;
			}
		});

		newItem[sentenceItem] = counter;
		return newItem;

	}, {});

	return obj;
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


 /*
  TASK 4
 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company
 */
let listOfCompanys = [
  {
    company: 'ASIMILINE',
    name: {
      last: 'Watkins',
      first: 'Lindsay',
    },
    eyeColor: 'brown',
    age: 20,
    picture: 'http://placehold.it/32x32',
    balance: '$1,091.09',
    isActive: true,
    guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
    index: 0,
    _id: '584babb6eeb4137cf14c37a3',
  },
  {
    company: 'ENJOLA',
    name: {
      last: 'Price',
      first: 'Greene',
    },
    eyeColor: 'brown',
    age: 39,
    picture: 'http://placehold.it/32x32',
    balance: '$3,533.55',
    isActive: true,
    guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
    index: 1,
    _id: '584babb6c7be9c2398ed263f',
  },
  {
    company: 'ZINCA',
    name: {
      last: 'Robertson',
      first: 'Barbara',
    },
    eyeColor: 'brown',
    age: 22,
    picture: 'http://placehold.it/32x32',
    balance: '$1,395.22',
    isActive: false,
    guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
    index: 2,
    _id: '584babb6cca4dbefa6001820',
  },
  {
    company: 'TALKOLA',
    name: {
      last: 'Cooke',
      first: 'Lea',
    },
    eyeColor: 'blue',
    age: 31,
    picture: 'http://placehold.it/32x32',
    balance: '$3,074.16',
    isActive: false,
    guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
    index: 3,
    _id: '584babb6391a2b568f1e9416',
  },
  {
    company: 'GEEKKO',
    name: {
      last: 'Webb',
      first: 'Kline',
    },
    eyeColor: 'blue',
    age: 34,
    picture: 'http://placehold.it/32x32',
    balance: '$1,520.21',
    isActive: false,
    guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
    index: 4,
    _id: '584babb66d6ea73e8ed51208',
  },
];

 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company

function createHashTags(arr) {
	let obj = arr.reduce((newItem, item) => {
		let id = item._id;
		let value = item.company
		newItem[id] = value;
		return newItem;
	}, {})

	return obj;
}

console.log('task 5-1 ---->', createHashTags(listOfCompanys));
//{"584babb6eeb4137cf14c37a3":"ASIMILINE", '584babb6eeb4137cf14c37a3':'Company2', }

// @ SUPER
/*
 *
 * TASK 1
 * Выведите уникальные значения
 *
 * */

function uniqueElements(arr) {
    let obj = arr.reduce((newItem, item) => {
    	let str = item;
        newItem[str] = true;
        return newItem;
    }, {});

    return Object.keys(obj);
}

/*function uniqueElements2(arr) {
  let fillteredArr = arr.filter((item, i) => {

    let item = true;

  })
  return fillteredArr;
}*/

//
let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];
//
console.log('task super 1-1 ---->',uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
console.log('task super 1-2 ---->',uniqueElements([1, 1, 2, 3, 3])); // 1,2,3
//console.log('task super 1-3 ---->',uniqueElements2(notUniqArray)); //1,2,5,10,25,30,0,22,3,
//console.log('task super 1-4 ---->',uniqueElements2([1, 1, 2, 3, 3])); // 1,2,3
/*
*
* super2
*
* implement array method filter function
So you have to create reusable filter function, which can be applied to an array, 
and callback function makes a decision to leave that variable inside an array or not
*/

function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    let item = array[i];
    let decision = callback(item);
    if (decision) {
      result.push(decision);
    };
  }
  return result;
};

function makeDecision(item) {
  if (item) {
    return item;
  }
  return false;
};


let array = [1, 10, 0, 'qwerty', null, undefined, [], {}, '', false, true, NaN, -20, ' '];

/*function filterArr(arr){
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (item === NaN || item === 0 || item === undefined || item === false || item === null || item === '' ) {
			continue;
		}
		result.push(item);
	}
	return result;
};*/

//console.log(filterArr(array));//[1, 10, "qwerty", Array(0), {…}, true, NaN, -20, " "]
console.log(filter(array, makeDecision));//[1, 10, "qwerty", Array(0), {…}, true, -20, " "]