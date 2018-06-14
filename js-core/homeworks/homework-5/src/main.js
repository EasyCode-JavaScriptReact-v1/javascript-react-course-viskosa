/*NASK 1
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];
 
function moveZeroToEnd(arr) {
	let zeroArray = [];

    while (arr.indexOf(0) != -1) {
      let index = arr.indexOf(0);//will return an index
      let element = arr[index];
      arr.splice(index, 1);
      zeroArray.push(element);
    }
    arr = arr.concat(zeroArray);
    return arr;
	}

console.log('task 1-1 --->', moveZeroToEnd(arr1));
console.log('task 1-2 --->', moveZeroToEnd(arr2));

/*TASK 2
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */
let a = [10,20,30,1,31,11,10];
let b = [-1,0,25];
let c = [-4,-10,25,10];
let d = [0,200,10,25,15];

function minimalNumber(arr) {
  let sum;

  let newArr = arr.sort();
  sum = newArr[0] + newArr[1];  

  return sum;
}

console.log('task 2-1 --->', minimalNumber(a));
console.log('task 2-2 --->', minimalNumber(b));
console.log('task 2-3 --->', minimalNumber(c));
console.log('task 2-4 --->', minimalNumber(d));

/*TASK 3
 3. Напишите функцию которая меняет местами имя и фамилию */
 let e = 'john McClane'; //=> "McClane john"
 let f ='Arnold Schwarzenegger'; //=> "Schwarzenegger Arnold"
 let g = 'James Bond'; //=> "Bond James"


/*function nameShuffler(str) {
  let arr = str.split(' ');
  let res = '';
  res = arr[1] + ' ' + arr[0];
  return res;
}*/

function nameShuffler(str) {

  let arr = str.split(' ');
  arr = arr.reverse();
  let res = '';
  res = arr.join(' ');
  return res;

}

console.log('task 3-1 --->', nameShuffler(e));
console.log('task 3-2 --->', nameShuffler(f));
console.log('task 3-3 --->', nameShuffler(g));

/*
 // TASK 4
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    element = element.toLowerCase();
    //element = element[0].toUpperCase();
    //console.log(element);
    elementArr = element.split('');

    let newElement = toUpper(elementArr);
    arr.splice(i, 1, newElement);
  }

  return arr;
}

function toUpper(arr){
  let firstLetter = arr[0].toUpperCase();
  arr.splice(0, 1, firstLetter);
  let res = arr.join('');
  return res;
}

console.log('task 4-1 --->', capMe(['jo', 'nelson', 'jurie']))     // returns ['Jo', 'Nelson', 'Jurie']
console.log('task 4-2 --->', capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);