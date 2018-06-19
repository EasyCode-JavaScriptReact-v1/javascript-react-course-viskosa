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

//-------------------------------------решение Олега:
//1. Создаем функцию, котрая возвращает объект:
//2. Чтобы приравянть свойство объекта функции - создаем функцию
//3. При вызове этого свойства отобразите 1, потом 2, потом 3 - делаем обычный счетчик через замыкание
//4. Присваеваем перевенной результат вызова ф-ции createCounter, т.е. вернет объект obj
//5. Обращаемся к методу объекта add, который у нас по сути замыкание
function createCounter(){           //1 шаг
  let obj = {};       //1 шаг
  let counter = 0;    //3 шаг

  function add(){     //2 шаг
    return counter++; //3 шаг
  };

  obj.add = add;      //2 шаг
  return obj;         //1 шаг
}

const myCounter1 = createCounter(); //4 шаг
console.log(myCounter1.add());      //5 шаг
console.log(myCounter1.add());      //5 шаг
console.log(myCounter1.add());      //5 шаг
console.log(myCounter1.add());      //5 шаг

//--------------------------------------усложнение
//6.При создании счетчика укажите изначальное состояние счетчика 
//7. Храните предыдущее состояние счетчика.
//7.Получить это состояние можно, добавив еще одно свойство в объект
//7/которое равняется функции - lastState()
//--------------------------------------------------решение Олега
function createCounter2(initialState){    //1 шаг //6шаг - передаем initialState
  let obj = {};       //1 шаг
  let counter = initialState || 0;    //3 шаг //6 шаг приравниваем counter к initialState или 0
  let counterPreviousState = counter; //7 шаг

  function add(){                     //2 шаг
    counterPreviousState = counter;  //7 шаг
    return counter++;                 //3 шаг
  };

  function add10(){
    counterPreviousState = counter;
    return counter = counter + 10; //8 шаг "а если..."
  }

  function lastState(){            //7 шаг - добавляем функцию lastState, которую потом сделаем методом объекта
    return counterPreviousState;   //7 шаг
  };

  obj.add = add;                //2 шаг
  obj.lastState = lastState;    //7 шаг
  obj.add10 = add10;            //8 шаг "а если..."
  return obj;                   //1 шаг
}

const myCounter2 = createCounter2(50); //4 шаг //6 шаг  - если здесь в createCounter 
                                    //передать число - все ок, а если не передавать - будет много NaN
                                    //чтобы этого избежать, добавляем в 118 строке "или равно 0"

console.log(myCounter2.add())       //2.add());      //5 шаг
console.log(myCounter2.add());      //5 шаг
console.log(myCounter2.add10());      //5 шаг
console.log(myCounter2.lastState());      //5 шаг