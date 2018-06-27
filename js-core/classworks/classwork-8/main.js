/*  CHECK THE HOMEWORK
 * TASK 1 - THE LAST TASK FROM PREVIOUS HOMEWORK----------
 *
 * Напишите функцию которая принимает 4 аргумента:
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {//функция, которая наполняет объект jun
/*нужно добавить метод объекту
  в зависимости от того, чему равняется сейчас счетчик
  или вызвать функцию(аргумент 4)
  или отправить сообщение об ошибке
*/  let counter = num;
  obj[name] = function(...args) { //метод jun.logger считает сумму переданных параметров
        if (counter === 0) {
          return `ERROR ! add more methods, У Вас осталось ${counter} попыток`
        }
        counter--;
            return `${fn(args)}, у Вас осталось ${counter} попыток`;
      };

};

methodCounter(jun, 'logger', 3, function(arr){ //здесь прямо наполняем объект jun
  let sum = arr.reduce((newItem, item) => {
      return newItem + item;
  }, 0);
    return sum;
});


//должна одна и та же функция вызываться не более 3 раз, т.к. 3 передано в функцию
console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
//console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
//console.log('task 3-1 ----> ',jun.logger(1, 2, 3, 4)); // 2, 10
console.log('task 3-2 ----> ',jun.logger(5, 5, 5, 5)); // 1, 20
console.log('task 3-3 ----> ',jun.logger(1, 2, 3, 4, 7, 10)); // 2, 27
console.log('task 3-4 ----> ',jun.logger(5, 5, 5, 5)); // 1, 20
console.log('task 3-5 ----> ',jun.logger(5, 5)); // ERROR ! add more methods

//добавьте функции methodCounter возможность увеличивать счетчик на заданное число
//jun.addCounter(10, methodName);


//----CLASSWORK-------------------------------------------------------

//1. SWITCH CASE --------редко пользуются---------

function checkActionType(action){
  switch (action.type) {

    case 'INITIALIZE': 
      return  {initialized: true};

    case 'INCREMENT':
      return {salary: '+500$'};

    case 'DECREMENT':
      return {salary: '-500$'};

    default:
      return {};
  };
}
console.log(checkActionType({type: 'INITIALIZE'}));

// 2. PSEUDOARRAYS-------------------------------------    
//Псевдомассивы приходят, когда берем у функции ее arguments.
//вроде как приходит массив - если посмотреть в консоли, то он заключен в квадратные скобки. 
//Но его прототип - объект (видно там же в консоли)
//поэтому не можем применить к псевдомассивам методы массивов - forEach, reduce и т.д.
//только можем пройти с помощью for

const pseudoArray = {
  0: 'one',
  1: 'two',
  2: 'three'
}
pseudoArray.length = 3;

for (let i = 0; i < pseudoArray.length; i++){
  const elem = pseudoArray[i];
  console.log(elem);
}

//---------------------------------------------
function add(){
  let arr = arguments;

  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    let item = arr[i];
    sum += item;
  }
  return sum;
}
console.log(add(1,2,3));
console.log(add(10,20,30));
console.log(add(10,20));
console.log(add(10,20,30, 40, 50,10));

//-------------ES6 solution---------------
//чтобы привести псевдомассив в чувство, используем деструкцию
//тогда можно применять методы массивов - forEach, reduce и т.д.

function add2(){
  let arr = [...arguments];// возьмет все аргументы, запишет их через запятую и поместит в массив
  return arr.reduce((newItem, item) => {
    return newItem + item;
  }, 0)
}

console.log(add2(1,2,3));
console.log(add2(10,20,30));
console.log(add2(10,20));
console.log(add2(10,20,30, 40, 50,10));

//-------------ES7 solution---------------
//чтобы привести псевдомассив в чувство, используем деструкцию
//тогда можно применять методы массивов - forEach, reduce и т.д.
//...args сразу возвращает массив аргументов!!! Пользоваться этим решение всегда!
function add3(...args){
  return args.reduce((newItem, item) => {
    return newItem + item;
  }, 0)
}

console.log(add3(1,2,3));
console.log(add3(10,20,30));
console.log(add3(10,20));
console.log(add3(10,20,30, 40, 50,10));


//------------OBJECTS----------------------------------

let obj1 = {id: 10};
let obj2 = {id: 10};
console.log(obj1 == obj2); //false, т.к. на самом деле при создании объекта создается 
//ссылка в оперативной памяти и ссылка присваивается в переменную 
//Объект физически занимает ячейку памяти
//Когда мы присваиваем новой переменной существующий объект, то присваивается существующая ссылка!!!

let obj = {name: 'JavaScript'};
let z = obj;
z.qwerty = 'qwerty';
console.log(obj); //{name: "JavaScript", qwerty: "qwerty"}
console.log(z);   //{name: "JavaScript", qwerty: "qwerty"}
//и obj, и z ссылаются на одну и ту же ячейку памяти, следовательно, имеют к ней одинаковый доступ
//если z добавил какое-то свойство, то оно видно и из obj. Мы просто смотрим на одну ячейку с разных сторон

//Когда мы передаем один и тот же объект в разный функции, то мы передаем не объект, мы передаем ССЫЛКУ
//Это очень дешево, ничего нового не инициализируется, большой перформанс
//----------------------------------------------------------------------

//Задача 1- скопировать объект user

const user = {
  id: 10,
  country: 'Thailand',
  email: 'example@example.com'
};

//написать ф-цию, которая принимает любой объект и возвращает его копию
//нужно скопировать объект

function copy(obj){
  let keys = Object.keys(obj);  //"id", "country", "email"]
  let newObj = {};

  keys.forEach((item) => {
    if (Array.isArray(obj[item])) { //ОЧЕНЬ СТАРЫЙ СПОСОБ: если вдруг очередной элемент массива - тоже массив, то он же в глубине души объект 
       newObj[item] = [...obj[item]]; //и тоже хранит ссылку на одну и ту же ячейку памяти. Поэтому деструктурируем его и записываем в новый массив
       return;// это типа continue, только для forEach
    }
    newObj[item] = obj[item];//в новый объект записываем ключи из их значения из старгого
  });

//или можно было так:
//  for (let key in obj) {
//    newObj[key] = obj[key];
//  }
  return newObj;
}

const newUser = copy(user);
newUser.country = 'India';// в новом объекте меняем значение ключа country

console.log(copy(user));//thailand
console.log(copy(newUser));//india

//-----------БОЛЕЕ СОВРЕМЕННЫЙ СПОСОБ - Object.assign------------------------------------
//Но JS придумал упрощение этой задачи, но это работает для копирования только на одном уровне. 
//Если будут вложенные объекты - у них по-прежнему останутся ссылки на одно и то же место в памяти

//function copy2(obj){
// let newObject = Object.assign({}, obj);  //скопируй объект obj в новый пустой объект {} и запиши это в переменную newObject
//  return newObject;
//}
//-----------Object.assign deep copy------------------------------------
//Чтобы скопировать более глубокую вложенность, пишут так, при этом мы должны знать, как называются ключи объекта:

function copy2(obj){
  let newObject = Object.assign({}, obj, {  //скопируй объект obj в новый пустой объект {} и запиши это в переменную newObject
    cars: [...obj.cars]     //значение ключа cars деструктурируй и положи в новый массив
  });  
  return newObject;
}

//Усложнение задачи 1 -----------------------------------------

const user2 = {
  id: 10,
  country: 'Thailand',
  email: 'example@example.com',
  cars: ['we', 'ref','re']
};

const newUser2 = copy2(user2);
newUser2.cars.push('toyota');//тойота отобразится не только в новом объекте, а в старом тоже
                                  //хотя объекты уже разные и ссылаются на разные ячейки памяти. Почему?
                                  // потому что cars - это еще один объект внутри разных объектов user2 и newUser2
                                  //и у внутреннего объекта cars в обеих объектах ссылка на одну и ту же ячейку памяти
                                  // Что же делать?

console.log(copy2(user2));//thailand
console.log(copy2(newUser2));//india


//------САМЫЙ СОВРЕМЕННЫЙ СПОСОБ------------------------------

//
//
//
const user3 = {
  id: 10,
  country: 'Thailand',
  email: 'example@example.com',
  cars: {
    id: 50,
    name: ['bmw', 'VAZ', 'mercedes', 'AUDI'],
    vendors: {
      addresses: ['google', 'yahoo']
    }
  }
};

function copy3(obj){
  let newObj = Object.assign({}, obj);
  return {
        ...obj, //деструтурируем каждое свойство объекта (копируем все свойства объекта)
        cars: {
            ...obj.cars,//перезаписываю cars - создастся три новых свойства: id, name, vendors
            name: [...obj.cars.name], //обновляю name
            vendors: {
              ...obj.cars.vendors,//если вдруг в vendors еще что-то лежит, кроме addresses
              addresses: [...obj.cars.vendors.addresses]
            }
        }
  }
}

const newUser3 = copy3(user3);
newUser3.cars.name.push('mazda');// тойота должна добавиться только к newUser3, а к user3 - нет
newUser3.cars.vendors.addresses.push('javascript');// тойота должна добавиться только к newUser3, а к user3 - нет


console.log(copy3(user3));//thailand
console.log(copy3(newUser3));//india