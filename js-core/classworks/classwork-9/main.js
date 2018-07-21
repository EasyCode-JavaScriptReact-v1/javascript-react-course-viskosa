//--------JSON JavaScript Object Notation-----------------

const myJSON = {
  "name": "my library",
  "version": 10,
  "dependency": {
    "react": "^16.4.0",
    "babel": false
    },
  "plugins": ['env', 'qwerty'],
  //methodES6(): {
  //  console.log(Obgect.key(myJSON));
  //}
}


//console.log(JSON.stringify(myJSON));//вернет строку

//const validJSON = JSON.parse(JSON.stringify(myJSON));
//console.log(validJSON);

//Обычный консоль лог покажет JSON как обычный объект. Чтобы вернуть все же JSON,
//нужно сделать JSON.stringify(myJSON) - превратит в строку
// а потом JSON.parse() - строку превратит в JSON

let parsed = JSON.parse(JSON.stringify(myJSON));
let keys = Object.keys(parsed);
console.log(keys);

//-------------------------------------------------

//Используя ES6 напишите ф-цию, которая принимает 1 агрумент имя и возвращает "Привет, меня зовут имя"
let hello = (name) => {
  return `Hi, my name is ${name}`;
}

let hello2 = (name) => `Hi, my name is ${name}`;

console.log(hello('Nataly'));
console.log(hello2('Nataly'));

//Используя ES6 напишите ф-цию, которая принимает 1 агрумент имя и возвращает объект {name:name}

let createObj = name => { //если передаем один аргумент, круглые скобки вокруг можно не ставить
  return {
    name  //сработает как name: 'Nataly'!
  }
}

// или так:
let createObj3 = (name, surname) => { //если передаем один аргумент, круглые скобки вокруг можно не ставить
  return {
    name,  //сработает как name: 'Nataly'!
    surname
  }
}

console.log(createObj('Nataly'));

let createObj2 = (name) => ({name})

console.log(createObj2('Nataly'));
console.log(createObj3('Nataly', 'Vladimirovna'));

//-----------------------------------------------------
const userArray = ['Vasya', 'Petya', 'Grigoriy'];
//[{name: 'Vasya'}, {name: 'Petya'}, {name: 'Grigoriy'},]

let newArr = userArray.map((name) => {
  return {
    name
  }
});


let newArr2 = userArray.map((name) => ({name}));

console.log(newArr);
console.log(newArr2);


//---- THIS контекст вызова функции-----------------------------------------\\

const anotherObject = {//разобрать
  name: 'qwer',
  id: 0,
  salary: '500$',
  methodES6
};


function methodES6() {
    console.log(Obgect.key(anotherObject));
  };


//напишите ф которая будет отображать количество страниц книги, 
//и ф можно вызвать как для объекта book1, так и для  book2
let book1 = {
  pages: 340,
  getPages
};

let book2 = {
  pages: 4,
  getPages
}

function getPages(){
  //console.log(this);
  return this.pages;
} 

function showPages () {
  return this.pages;
}
/*function getPages(book) => {
  return this.pages
}*/

console.log(book1.getPages());
console.log(book2.getPages());
console.log(book1.showPages());