// TASK 1-----------------------------------------------------
//Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --
/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requirements: ['Node.js', 'JavaScript', 'OOP', 'mongo'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

//иду по массиву требований, беру каждый элемент массива
//и смотрю в массив скилов - есть ли там такой скилл?
//Если есть - возвращаю саксесс
//если нет - фейл

function goodDev(dev) {
   //console.log(this);
   let skills = this.skills || this.experience;

   this.requirements.forEach((requireItem) => {
      let isConsist = skills.some((skillItem) => {
         if (typeof skillItem === 'object') {
            skillItem = skillItem.technology;
         }
         return requireItem == skillItem;//false or true
      })
     // res = isConsist ? `required: ${requireItem} ...success` : `required: ${requireItem} ...fail`

      if (isConsist) {
         console.log(`required: ${requireItem} ...success`);// как сделать без консоль лога, а с ретерном?
      } else {
         console.log(`required: ${requireItem} ...fail`);
      }

   })

}

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

//goodDev(developer1);
//goodDev(developer2);

developer1.goodDev();
developer2.goodDev();

/*
 * TASK 2----------------------------------------
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 * */

let myObject = {
  database: [
   { 
      age: 100, 
      name: 'b' 
   },
   { 
      age: 15, 
      name: 'c' 
   },
   { 
      age: 25, 
      name: 'a' 
   }
  ]

};
//тут не понятно, в консоли выводит 2 раза одинаково отсортированные массивы по name,
//хотя если смотреть в дебаггере, то все происходит верно  
//и в консоль выводятся 2 разных правильно отсортированных массива
myObject.myFilter = function(param) {

   let sortedArr = this.database.sort(compare);

   function compare(a, b){
      if (isNaN(a[param])) {

         if (a[param] > b[param]) {
            return 1;
         };
         if (a[param] < b[param]) {
            return -1;
         };
         if (a[param] == b[param]) {
            return 0;
         }

      } else {
         return (a[param] - b[param]);
      }

   }

   return sortedArr;
};


// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log('sort by age', myObject.myFilter('age'));

// {age:25, name:a}, {age:100, name: b} ...
console.log('sort by name', myObject.myFilter('name'));

/*
 * TASK 3----------------------------------------------------------
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
*/

/*TASK 1
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
   let numberArray = [];

   arr.forEach((item) => {
      if (item === 0) {
         zeroArray.push(item);
         return;//переход на следующую итерацию
      }
      numberArray.push(item);
     
   })
   return numberArray.concat(zeroArray);
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

  let newArr = arr.sort((a, b) => {
      return (a - b);
   });

  sum = newArr[0] + newArr[1];  
  return sum;
}

console.log('task 2-1 --->', minimalNumber(a));
console.log('task 2-2 --->', minimalNumber(b));
console.log('task 2-3 --->', minimalNumber(c));
console.log('task 2-4 --->', minimalNumber(d));


/*TASK 3 - ТУТ ВРОДЕ БЫ НЕЧЕГО ПЕРЕПИСЫВАТЬ С МЕТОДАМИ МАССИВА И СТРЕЛОЧНЫМИ ФУНКЦИЯМИ
 3. Напишите функцию которая меняет местами имя и фамилию */
 let e = 'john McClane'; //=> "McClane john"
 let f ='Arnold Schwarzenegger'; //=> "Schwarzenegger Arnold"
 let g = 'James Bond'; //=> "Bond James"

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

/*function capMe(arr) {

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    element = element.toLowerCase();
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
}*/

function capMe(arr) {
   let capitalized = arr.map((item) => {
      let loweredItem = item.toLowerCase();
      let firstLetter = loweredItem[0].toUpperCase();
      return firstLetter + loweredItem.slice(1);
   })
   return capitalized;
}

console.log('task 4-1 --->', capMe(['jo', 'nelson', 'jurie']))     // returns ['Jo', 'Nelson', 'Jurie']
console.log('task 4-2 --->', capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey']
