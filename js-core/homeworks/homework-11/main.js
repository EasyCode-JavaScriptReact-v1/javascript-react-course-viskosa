'use strict';

//TASK FROM PREVIOUS HOMEWORK----------------------------------
/** Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
---------------------------------------------------------------------------------------
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