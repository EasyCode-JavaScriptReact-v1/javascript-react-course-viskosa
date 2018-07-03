'use strict';

/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;//5

let z = t => { //z равно функции, которая принмает t. В t пришла функция х
  let y = 12;
  return t();
};

//console.log('task 1-1---->', y);//5, берет значение глобальной переменной y

//console.log('task 2-1---->', z(x)); // что вернет - undefined, потому что нет никакого ретерна из t 
//если добавить return, то возвращается 5, т.к. функция х пришла со своем контекстом, т.е. с у=5. Круто)

/*
 *
 * TASK 2----------------------------------------------
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = function(str) {
	return `<${str}></${str}>`
};

let createBODY = $('body');
let createDIV = $('div');

console.log('task 2-1---->', createBODY); // <body></body>
console.log('task 2-2---->', createDIV); // <div></div>

/*
 *
 * TASK 3--------------------------------------------------------------
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {

	add(str) {
		this.res += `<${str}></${str}>`;
		console.log(this.res);
		return this;//возвращает ezjQuery, у которой в res каждый раз добавляется новое значение
		//и каждый следующий вызов происходит с тем, что в res уже что-то есть
	}

};

ezjQuery.res = '';

ezjQuery
  .add('body') // <body></body>
  .add('div') // <body></body><div></div>
  .add('h1'); // <body></body><div></div><h1></h1>

 /*
 *
 * TASK 4--------------------------------------------
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

var ezjQuery2 = {

  res: '',

  add(str, inner) {

    if (this.res.length != 0) {
      this.res = (inner != undefined) ? this.res.replace('></', `><${str}>${inner}</${str}></`) : this.res.replace('></', `><${str}></${str}></`);
      //console.log(this.res);
      return this;
    }

    this.res += `<${str}></${str}>`;
    //console.log(this.res);
    return this;
  },

  render() {
    document.write(this.res);
    console.log(this.res);
    //return this.res; //тут что-то одно получается - или обнулить res, или ретернуть его. И обнулить, и ретернуть непонятно как
    this.res = '';
  }

};


var helloList = ezjQuery2
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();

console.log('task 3-1---> ', helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery2
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log('task 3-2---> ', bodyDiv); //<body><div></div></body>


// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 */


 // $('body').add('li', 'hi').render() // <body><li>hi</li></body>
