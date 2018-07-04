//ООП придумано для разбиения больших задач на маленькие кусочки, которые решают отдельные задачи
// Функции-конструкторы принято называть с большой буквы


function Database(databaseName){
  /*var obj = {} ---> this*/ //когда вызываем конструктор через new, тут неявно создается объект, приравнивается к this
  this.databaseName = databaseName;

  /*return obj*/// - и в конце по умолчанию вернет объект
  //но можно из конструктора вернуть что-то явно, например, так:

  //return {
  //  name: 'something',
  //}

  //и тогда this не работает
  //если тут указать примитив, то при вызове new он будет утерян:

  //return 10; - значение примитива, возвращенное из конструктора, будет утеряно при вызове через new
}

var mySQL = new Database('MySQL');
console.log(mySQL);

//--------------------------------
/*Создать конструктор, который будет создавать новый объект

myArray = параметр 1 : Array
cars = параметр 2 : Object
name = параметр 3 : string*/

function createObject(arg1, arg2, arg3){ //по умолчанию вернет объект, если мы явно ему ничего не указываем заретернить

    let x = 'privet kak dela';

    this.myArray = arg1, // this ссылается на этот объект, который создается в момент вызова new
    this.cars = arg2,
    this.name = arg3

}

let newObj = new createObject([], {}, '');
console.log(newObj); //createObject {cars: {}, myArray: [], name: ""} в консоли еще пишет название конструктора

//---------------------------------------------------------------------
//Если присвоить переменной z функцию конструктор без new, т.е. без вызова ее:

var z = createObject('qq', 'ww', 'ee');

//то this ссылается на Window, и в Window появились переменные myArray='qq', cars = 'ww', name = 'ee'

//Но если вызвать через new:
var z = new createObject('qq', 'ww', 'ee');

//то внутри неявно создастся объект, объект приравняется this и в конце возвращвется

//-------------------------------------------------------
//Если в конструкторе создать переменную let x = 'privet kak dela', и потом сделать так:

var s = new createObject('a', 'b', 'c');
console.log('s',s); //то x пропадет, ее заберет сборщик мусора
//Что происходит? При запуске конструктора через new инициализируется икс 
//(может он будет использоваться где-то ниже в конструкторе), потом  возвращается объект, 
//а так как икс нигде не используется, он пропадет, его заберет сборщик мусора

//z и s хранят ссылки на объекты, созданные конструктором. Еще называют экземпляром функции-конструктора //instance

function Car(color, model){ //конвеер нераскрашенных машин
  this.color = color,
  this.model = model
  //this.wheels = 4
}

const audi = new Car('white', 'audi');
const minicooper = new Car('red', 'minicooper');
console.log(audi, minicooper);
//создаются 2 экземпляра конструктора - audi и minicooper, разных цветов и моделей.
//Если теперь в конструктор добавить this.wheels = 4, то колеса появятся у обоих созданных экземпляров

//-------------------------------------------------
//Создать ф-цию конструктор, которая в зависимости от количества параметров
//будет создавать объект с количеством свойств, равным количеству аргументов

function createObject2(arg1, arg2, arg3){
    if (arg1 !== undefined) { //или if ( arg1 ) {} типа если нет аргумента, то вообще не нужно создавать свойство
      this.arg1 = arg1;
    }
    if (arg2 !== undefined) {
      this.arg2 = arg2;
    }
    if (arg3 !== undefined) {
      this.arg3 = arg3;
    }

}

let newObj2 = new createObject2(1, 2, 3);
let newObj3 = new createObject2(1, 2);

console.log(newObj2);
console.log(newObj3);

//Если мы хотим передать в функцию много аргументов (хотя их больше трех, то это уже плохо), то делают так:

function createObject3(options){ //сюда один параметр options, он прийдет в виде объекта
    // а тут 
    let {arg1, arg2, arg3} = options; //если передано больше, то все дописываем в фигурныые скобки

    if (arg1 !== undefined) { //или if ( arg1 ) {} типа если нет аргумента, то вообще не нужно создавать свойство
      this.arg1 = arg1;
    }
    if (arg2 !== undefined) {
      this.arg2 = arg2;
    }
    if (arg3 !== undefined) {
      this.arg3 = arg3;
    }

}

let newObj6 = new createObject3({myArray: 'a', name: 'b', type: 'c'});

console.log('newObj6', newObj6);

//-------------------------------------------------
//Создать ф-цию конструктор, которая будет иметь приватный счетчик,
//данный счетчик можно будет увеличивать только вызвав метод counter()
//НОВЫЙ СПОСОБ ДЕЛАТЬ ЗАМЫКАНИЯ, СИЛЬНО УДОБНЕЕ

function CreateObject4(){
    let counter = 0;    //
    this.counter = function(){
      return counter++;
    }
}

/*return { //а раньше мы делали так
  counter(){
     console.log(counter++) ;
  }
}*/

let newObj4 = new CreateObject4();
console.log(newObj4);//в консоли покажет новый экземпляр объекта, у которого в Scopes будет Closure!!!

console.log(newObj4.counter());
console.log(newObj4.counter());
console.log(newObj4.counter());
console.log(newObj4.counter());

//----------------------------------
//ПАРАДИГМА ООП


Database.prototype.registerUser = function(name, password){
  this.user = {name, password}

  //this.user = { //  или так
  //  name: name, 
  //  password: password
  //}
}

//то, что было в prototype функции конструктора, присвоилось в новый экземпляр в _proto_

//--------------------------------------------------------------
//сделайте функцию конструктор которая наз Transport и  будет принимать 3 аргумента:
//color, name, doors
//и создайте себе машину той марки, которую вы желаете на зарплату миддла

//доюавьте метод beep всем машинам, при вызовк метода отобразить в консоли желаемый сигнал

function Transport(color, name, doors){
  this.color = color;
  this.name = name;
  this.doors = doors;
  this.wheels = 4
}
Transport.prototype.beep = function(){
  return 'beep';
}

/*Transport.prototype.wheels = {//лучше добавялть прямо в конструктор
  wheels: 4,
}*/

let toyota = new Transport ('red', 'toyota', '3');
let bmw = new Transport ('green', 'bmw', '5');

console.log(toyota, toyota.beep());
console.log(bmw, bmw.beep());

//Создайте еще одну ф-конструктор Bus
//ф-ция конструктора будет наследоваться от Transport
//и добавлять стоимость проезда новому экземпляру
//
//
function Bus(){

}

Bus.prototype.getPrice = function(){

}

var bus = new Bus();
bus.beep();
bus.getPrice();

