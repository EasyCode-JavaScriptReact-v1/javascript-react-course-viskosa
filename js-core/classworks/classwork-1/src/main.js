//closures

function counter (){
  let myCounter = 0;

  const myFunction = function(){
    return myCounter++;
  }

  return myFunction;
}

const newCounter = counter(); //1. сюда попадает рез-т вызова функции counter. Результат ее выполнения - это return myFunction
                              //что значит, что в newCounter вернется тело функции myFunction.
console.log(newCounter());    //2. Теперь когда вызываем newCounter(), то по сути вызываем myFunction, которая у себя в Scope 
                              //находит myCounter = 0 и делает return myCounter++, т.е. ноль, потом увеличивает значение 
                              //myCounter на единицу и запоминает, что теперь у нее myCounter == 1
console.log(newCounter());    //3. При следующем вызове newCounter() значение myCounter уже равно 1, вернет 1 и потом
                              // увеличит значение myCounter еще на единицу
console.log(newCounter());    //4. и так далее

//-------------------------------------------------
//создать функцию, которая вернет новую функцию
//и будет складывать строки внутри себя

function a(){
  let str = '';
  return function(value){
          str += `${value} `;
          return str;
        };

}

const helloWorld = a();
//let str = '';
/*const helloWorld = function(value){
                      str += `${value} `;
                      return str;
                    };;*/

console.log(helloWorld('hello'))//
console.log(helloWorld('world'))//

//------------------------------
//функция будет складывать 2 числа

function plus(x){
  //let number = 0;
  return function(y){
    return x + y;
  }

}

const numberTwenty = plus(10);
console.log(numberTwenty(20));//30

//---------------------------------------

//напишите ф-цию, которая будет возвращать объект и у него будет свойство
//которое будет равняться функции. Свойство add. При вызове этого свойства отобразите 1, потом 2, потом 3
//const myCounter.add()//1
//const myCounter.add()//2
//const myCounter.add()//3

function qqq(){
  let counter = 0;
  return obj = {
      add : function() {
      counter++;
      return counter;
    }

  }

}

const myCounter = qqq();

console.log(qqq());
console.log(myCounter.add())//1
console.log(myCounter.add())//2
console.log(myCounter.add())//3

//--------------------------------------усложнение
function qqq1(x){
  let counter = x;
  return obj = {
      add : function() {
        return {
          prevState: counter,
          state: ++counter
        };
    }
  }

}

const myCounter2 = qqq1(10);

console.log(myCounter2.add())//1
console.log(myCounter2.add())//2
console.log(myCounter2.add())//3