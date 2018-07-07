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

var mySQL = new Database('MySQL');//здесь превратили Database в объект и положили в переменную mySQL
//т.е. выглядит это примерно так:
//                             var mySQL = {
//                                 databaseName: 'MySQL'
//                               }
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

//то внутри неявно создастся объект, объект приравняется this и в конце этот объект возвращвется

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
    let {arg1, arg2, arg3} = options; //здесь в фигурные скобки дописываем только те аргументы из options, которые нам нужны 
    console.log(options);//тут будут все переданные при вызове аргументы, однако в строке выше //{myArray: "a", name: "b", type: "c"}
                          //можем из options взять только те, которые мне будут нужны

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
console.log(newObj4); //в консоли покажет новый экземпляр объекта, 
                      //у которого в Scopes будет Closure, а в нем counter = 0!!!
                      //создав новый экземпляр, создадим еще один новый счетчик
console.log(newObj4.counter());
console.log(newObj4.counter());
console.log(newObj4.counter());
console.log(newObj4.counter());

//--------------------------------------------------------------------
//ПАРАДИГМА ООП (парадигма - ряд убеждений, ряд законов)
//-прототипное программирование. Прототип - объект-образец, по образу и подобию которого создаются другие объекты
//-объекты-копии могут сохранять связь с родительским объектом, автоматически наследуя изменения в прототипе
//-каждый объект может стать прототипом(__proto__)

function Database2(databaseName){   //1 - есть ф-ция конструктор
  this.databaseName = databaseName;
}
//V - методы прямо в конструкторах писать плохо, их пишут в прототипах. Так происходит правильное наследование через Object.create
//Если записать метод прямо в конструкторе, а не в прототипе, то если мы потом захотим что-то изменить в методе, то оно
//не изменится для всех уже созданных экземпляров, а поменяется только в конструкторе и будет уже новое для только экземпляров, 
//созданных после того, как поменяли метод в конструкторе

//Прототип принято считать публичным, его могут все наследовать

Database2.prototype.registerUser = function registerUser(name, password){//2 - есть прототип функции Database2
  //const newUser = new User(name, password);//это абстрактная вещь, просто показано, что 
                                            //внутри одного конструктора можно вызывать другие конструкторы
  this.user = {name, password}

  //this.user = { //  или так
  //  name: name, 
  //  password: password
  //}
}
var mySQL1 = new Database2('MySQL1');//тут в консоли будет ф-ция конструктор
console.log('mySQL--1', mySQL1);//то, что было в prototype функции конструктора, 
                              //в момент создания нового экземпляра присвоилось(передалась ссылка) новому экземпляру в _proto_
                              //т.е. здесь в _proto_ можем видеть ф-цию registerUser

Database2.prototype = { // прототайп, а теперь равняйся объекту
                        // с этого момента у всех экземпляров, которые будут созданы с этого момента,
                        // в прото будет свойство table: "MAIN" и не будет конструктора, 
                        // однако это не повлияет на все созданные ранее экземпляры, там все останется по-прежнему
                        // т.е. здесь мы говорим прототипу, чтобы он потерял свою предыдущую ссылку
                        // но так мы перезатрем конструктор, и так лучше не делать
  table: "MAIN",       
  registerUser() {
    console.log(this.databaseName)
  }
}
console.log('mySQL--1', mySQL1);//ничего не изменилось, mySQL1 продолжает хранить ссылку на тот прототип конструктора,
                                //который был в момент создания mySQL1

var mySQL2 = new Database2('MySQL2'); 
console.log('mySQL--2', mySQL2);//а тут в консоли не будет ф-ции конструктора, мы ее перезатрем
console.log(mySQL2.table) //"MAIN";

var mongodb = new Database2('mongodb'); //теперь создаем третий экземпляр
console.log('mongodb.table',mongodb.table) //MAIN"
console.log('mySQL2.table', mySQL2.table) //"MAIN"

//Сейчас в mySQL2.__proto__.table лежит "MAIN". Делаем так:
mySQL2.__proto__.table = 'QWERTY-YAHOO';

console.log('mySQL1.table', mySQL1.table);  //undefined, там вообще не было изначально table
console.log('mySQL2.table', mySQL2.table);  //QWERTY-YAHOO
console.log('mongodb.table', mongodb.table);//QWERTY-YAHOO
            // потому что и mySQL2, и mongodb ссылаются на один прототип, и мы его поменяли чуть выше

//ОТЛИЧИЕ prototype и __proto__:
//prototype используем для функции-конструктора
// __proto__ используем для объекта

//V - если создаем экземпляр класса и ему что-то добавляем, то это никак не отражается на других экземплярах
//V - если же из экземпляра поменять прототип, тогда это отразится на других экземплярах
//V - из прототипа можем добавлять свойства конструктору и переопределять методы конструктора(через this)
//V - при обращении к чему -то в экземпляре через this сначала это поищется в главном конструкторе, если там нет -
//полезет искать в прототип, и если и там нет, то будет искать в глобальном объекте, пока не нейдет искомое или null

//--------------------------------------------------------------
//сделайте функцию конструктор которая наз Transport и  будет принимать 3 аргумента:
//color, name, doors
//и создайте себе машину той марки, которую вы желаете на зарплату миддла

//добавьте метод beep всем машинам, при вызове метода отобразить в консоли желаемый сигнал

function Transport(color, name, doors){
  this.color = color;
  this.name = name;
  this.doors = doors;
  this.wheels = 4
}

Transport.prototype.beep = function(){
  console.log('beep');
}

/*Transport.prototype.wheels = {//лучше добавлять прямо в конструктор, т.к. это не логика
  wheels: 4,
}*/

let toyota = new Transport ('red', 'toyota', '3'); //и toyota, и bmw хранят ссылку на Transport
let bmw = new Transport ('green', 'bmw', '5');

console.log(toyota, toyota.beep());
console.log(bmw, bmw.beep());

//Создайте еще одну ф-конструктор Bus
//ф-ция конструктора будет наследоваться от Transport
//и добавлять стоимость проезда новому экземпляру

function Bus(){
}

//Bus.prototype = new Transport('white', 'laz', 8);//наследуемся из Transport;
// в этот момент создался новый экземпляр, он лег в prototype, и у экземпляра в прото уже лежит метод beep

//но правильно наследование делать так:
Bus.prototype = Object.create(Transport.prototype)// если так делать, то конструктор Transport не будет вызван,
                                                       // а prototype от Transport(т.е. метод beep) присвоятся

Bus.prototype.getPrice = function(){ //если это написать выше, чем наследование, то не сработает, т.к
                                      // наследование перезатрет prototype
  console.log('3hrv');
}

var bus = new Bus(); //Если наследоваться как Bus.prototype = new Transport(...), то у bus прям в нем лежит 
                      //метод getPrice и все свойства из конструктора - color, name, doors, wheels, т.к.
                      //конструктор был вызван; и метод beep лежит в прото 

                      //А если наследоваться правильно через Object.create(Transport.prototype) и передавать в него прототип
                      //от которого нужно наследоваться, то у bus будет только метод getPrice и никаких свойств, и в прото 
                      //будет лежать метод beep и сам конструктор Transport

                      //Если нужно унаследовать все, и свойства из конструктора, то пишут еще по-другому:

                      //function Bus(){
                      //  Transport.apply(this, arguments);
                      //}

console.log('bus--->', bus)

bus.beep();
bus.getPrice();




//---РЕЗЮМЕ-----------------------------------------------------------------------

function Database3(databaseName){
  this.databaseName = databaseName;
}

Database3.prototype.registerUser = function registerUser(name, password){
  this.user = {
    name: name, 
    password: password
  }
}

var a = new Database3('a');
console.log('a', a);

Database3.prototype = { //с этого момента у всех экземпляров, которые будут созданы с этого момента,
                        // в прото будет свойство table: "MAIN" и не будет конструктора, 
                        // однако это не повлияет на все созданные ранее экземпляры, там все останется по-прежнему
                        //т.е. здесь мы говорим прототипу, чтобы он потерял свою предыдущую ссылку

  table: "MAIN",       
  registerUser() {
    console.log(this.databaseName);
  }
}

console.log('a', a); // тут в прото все еще нет свойства table: "MAIN", т.к. а создан раньше, 
                      // чем поменялось прото у конструктора

var b = new Database3('b');
console.log('b', b);  // а тут в прото уже есть свойство table: "MAIN" и нет конструктора, он затерся

var c = new Database3('c');
console.log('c', c);  // и тут то же самое, в прото уже есть свойство table: "MAIN" и нет конструктора, он затерся
                      //т.е. b и c сейчас одинаковые

//теперь если сделать так:
b.__proto__.table = 'QWERTY-YAHOO';// здесь перезаписываем ссылку на table

console.log('a', a);// то на а это никак не повлияет, потому что он создан еще до перезаписи прототипа у конструктора
                    // и он хранит предыдущую ссылку прототипа конструктора
console.log('b', b);// а в b в прото перезапишется table на 'QWERTY-YAHOO'
console.log('c', c);// и в с в прото перезапишется table на 'QWERTY-YAHOO'
                    // потому что и а, и b ссылаются на один прототип