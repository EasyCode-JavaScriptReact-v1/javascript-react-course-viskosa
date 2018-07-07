//THIS----------------------------------------------
//1. Внутри ф-ции this устанавливается как глобальный объект(Window), а при 'use strict' - в undefined
//2. При вызове как метода объекта, this ссылается на данный объект(выбирает объект до точки)
//3. bind, call, apply устанавливают контекст this принудительно, но bind только устанавливает контекст,
//а call и apply сразу же и вызывают функцию
//4. при создании экземпляра через new, this станет ссылаться на вновь созданный объект
//call, apply, bind есть у всех функций, это встроенные методы

//--пример для "выбирает объект до точки"-----------------------

const obj = {
  //-----------
  a: {
    showThis(){
      console.log(this);//this ссылается на a
      //-------------
      (function show(){
        console.log(this);//this ссылается на window или на undefined при 'use srtict'
      })();

    }
  },
  //----------
  showThis(){
    console.log(this);//this ссылается на obj
  }
} 

obj.a.showThis();
obj.showThis();


//---call, apply, bind---------------------------------------------

var bar = 'global';

function foo(a, b, c) {
  console.log(a, b, c);
  console.log(this.bar);//вернет global, потому что this ссылается на window, 
                        // а у window есть переменная bar
}

var obj1 = {
  bar: 'это мой контекст',
  foo: foo  //ф-ция foo, объявленная выше, которая консолит this.bar. В данном случае
            //  this - это уже obj1, и значение this.bar - это 'это мой контекст'
};

var obj2 = {
  bar: 'Привет объект 2'
};

foo(); // global
obj1.foo(); // obj1.bar - это мой контекст

foo.call(obj2); //Тут говорим: функция foo, позвони в объект obj2. 
                // Функция сделает вызов и в качестве конекста установит то, что было передано 
                // первым аргументом (obj2). Вернет 'Привет объект 2'
                //call может кроме контекста принимать неограниченное кол-во аргументов

foo.apply(obj2); //Тут говорим: функция foo, применись к obj2. 
                // Функция сделает вызов и в качестве конекста установит то, что было передано 
                // первым аргументом (obj2). Вернет 'Привет объект 2'    

foo.call(obj2, 1, 2, 3); // вернет 1, 2, 3 и 'Привет объект 2'
foo.apply(obj2, [10, 20]); //вернет 1, 2, undefined и 'Привет объект 2'. Т.е. берет данные 
                           // из массива и подставляет их туда, где они запрашиваются

// Отличие call от apply в том, что в call кроме может передаваться много аргументов, 
// а в apply - кроме контекста передается один аргумент в виде массива

var www = foo.bind(obj2);//прибинди к foo этот объект obj2. В www попадает новая функция 
                          // с привязанным контекстом, но не вызывается. Можем вызвать когда-нибудь потом
www(); // 'Привет объект 2'
//Можно прям передать новый объект :  
 var wwww = foo.bind({bar: 'qwe qwe qwe'});
 wwww();                    //'qwe qwe qwe'

//----- NEW and function-constructor-----------------------------------------------------

function User(name){
  /*var obj = {} ---> this*/ //когда вызываем конструктор через new, тут неявно создается объект, приравнивается к this
  this.name = name;

  /*return obj*/// - и в конце по умолчанию вернет объект
  //но можно из конструктора вернуть что-то явно, например, так:

  //return {
  //  name: 'something',
  //}

  //и тогда this не работает
  //если тут указать примитив, то при вызове new он будет утерян:

  //return 10; - значение примитива, возвращенное из конструктора, будет утеряно при вызове через new
}

let userOleh = new User('Oleh');
console.log(userOleh);


//-------------------------------------------------------------------
const cafe = {
  name: 'Мир средиземья',
  fruits: ['apple', 'orange', 'dfgghs'],
  partners: [
    {
      name: 'Frodo',
      fruits: ['хлебцы', 'капуста']
    },
    {
      name: 'Боромир',
      fruits: ['яблоки', 'киви']
    },
      {
      name: 'Гендальф',
      fruits: ['манго', 'банан']
    }
  ],

  showFruits() {  //метод, который показывает фрукты
    console.log(this.fruits);
  },

  showPartnersFruits() {
    let method = this.showFruits; //нужно в эту функцию получить метод showFruits, с которого можно позвонить 
                                  //звонить может только функция. Получаем сюда метод showFruits
    console.log(this);// объект cafe
  
    this.partners.forEach((item) => { //и для каждого объекта-партнера вызываем метод showFruits
      method.call(item); // возьми method и позвони с него в текущий объект, т.е. в item
      //Это значит вызови метод method, он же this.showFruits, для каждого объекта
      //this.showFruits.call(item);// можно и так написать, без получения переменной method

      //Здесь если была бы не стрелочная функция, а обычная, то контекст бы потерляся. Раньше были решения такие:
      //  showPartnersFruits() { 
      //    var self = this;  // в self записали контекст cafe, т.е self теперь ссылается на cafe
      //    this.partners.forEach(function(item){ //this тоже ссылается на cafe
      //        self.showFruits.call(item);       //если бы здесь оставили this вместо self, то this стал бы ссылаться
                                                //на window, а не на cafe. А так self продолжает ссылатся на cafe и все ок
      //    })
      //  }

      //ИЛИ!!! forEach кроме функции, вторым аргументом может принимать контекст, т.е. this
      //  showPartnersFruits() { 
      //    this.partners.forEach(function(item){ 
      //        self.showFruits.call(item);                              
      //    }, this) //так тоже все сработает
      //  }


    })
  }

}
//добавьте метод, который будет в консоли отображать фрукты

cafe.showFruits();
cafe.showPartnersFruits();//Отобразите фрукты партнеров Мира, используя метод showFruits
// внутри showPartnersFruits

//ARROW FUNCTIONS-------------------------------------------------
  //У стрелочных функций есть ряд ограничений
  //1. У них нет arguments:
  const qqq = (a,b) => {
    console.log(arguments)//error: arguments is not defined
  }
  //qqq();
  //но если закинуть туда деструкцию, то все сработает:
  const qqq2 = (...args) => {
    console.log(args)//[1,2,3,4,8]
  }
  qqq2(1,2,3,4,8);


//---------2 PART---__PROTO__-------------------------------------------------------

var car = {
  wheel: 4
};

var mustang = {
  door: '2/3/4'
}
mustang.wheel = 4;//добавили в объект мустанг 4 колеса

mustang.__proto__ = car;//в __proto__ мустанга записали объект car
                        //теперь у мутсанга есть door: '2/3/4' и wheel: 4, и в __proto__ опять есть wheel: 4

car.color = 'red';//в объект car дописали свойство color: 'red', и теперь это свойство отобразится и в __proto__ мустанга
                  //т.е. можем обратиться mustang.color и получим red 

delete mustang.wheel//удалили собственное свойство мустанга wheel: 4, но в __proto__ осталось wheel: 4 от саr
mustang.wheel// все равно получим 4

mustang.color = 'green';//так мы добавим цвет самому объекту мустанг, в его прото останется красный цвет от кар

var someMethod = { //создаем какой-то метод - тут только через объект, напрямую через ф-цию не прокатывает
  toDo(){     //это если хотим добавить его кому-то в прото, тогда только через объект
    console.log(this.color);
  }
}

car.__proto__ = someMethod;//и записываем его в прото car-у

console.log(mustang);//у мустанга в __proto__.__proto__ запишется метод toDo
mustang.toDo();//green

car.makeBeeeeep = function(){ //можем в car добавить функцию, и все равно она будет доступна из мустанга
  console.log('beep');
}
mustang.makeBeeeeep();//beep

//------------------------------------------------------------------------

//Задача - coздаем 30 студентов и всем им добавляем одного и того же учителя
// у студентов поменялся учитель. Как быстро изменить имя учителя у всех студентов?

const teacher = {
  teacherName: 'Alla I'
}

const halava = function(){
  console.log('Халява, приди!');
}

function createStudent(str, fn){//ф-ция, которая создает студента
  const student = {};
  student.__proto__ = teacher;//каждому в прото добавили учителя
  student.name = str;
  student.someMagic = fn; //если бы прямо здесь написали метод, то каждому студенту 
                          // создали бы по одинаковому методу, т.е. 30 одинаковых методов, это плохо
                          // А так мы 1 раз создали функцию и каждому студенту просто добавили ссылку на эту ф-цию

  return student;
}

const students = [];

for (let i = 0; i < 30; i++) {    //создаем объект студент и каждому из них ставим разное имя student 1, 2,3...
  const newStudent = createStudent(`student ${i + 1}`, halava);
  students.push(newStudent); 
}

//students.forEach((item) => { //каждому студенту в __proto__ добавляем teacher Alla I
//  item.__proto__ = teacher;
//}) // это сделали сразу в 229 строке

console.log(students[0].teacherName);//'Alla I'
teacher.teacherName = 'Boris P'; //потом меняем имя учителя и теперь у всех студентов новый учитель Boris P в __proto__

console.log(students);
console.log(students[0].teacherName);//'Boris P'

//-----ВНИМАНИЕ! Если запишем по-другому:----------

console.log(students);//'Vera P' и тут, и ниже у всех студентов в прото будет Vera P
teacher.teacherName = 'Vera P'; 
console.log(students);//'Vera P

//так происходит потому, что каждый student в массиве students - это ссылка, и ссылка у нас перезаписалась на Vera P.
//А в 249 и 253 строках мы запрашиваем значение, а значение передается не по ссылке, оно просто вернулось и все


