'use strict';


/*Создайте функцию конструктор.
У данной функции должны быть методы:

Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Проверка, что телефонный номер содержит только числа
Добавление пользователей в справочник
Удаление пользователя по имени, фамилии
Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Фильтр по указанному свойству*/

function oldPhoneApp() {
  this.dataBase = [
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
    ]
}

oldPhoneApp.prototype.editUser = function(id, options) {
  /*
   options.name
   options.
  */  
}

oldPhoneApp.prototype._validate= function(id, options) {
  /*
   options.name
   options.
  */  
}

const oldmyApp = new oldPhoneApp();

class PhoneApp {
  constructor() {
    this.dataBase = [
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
    ]
  }

  normalizePhoneNumber(...args){
    let arrNumber = args[0].split('');

    arrNumber.splice(0,0,'(');
    arrNumber.splice(4,0,') ');
    arrNumber.splice(7,0,'-');
    arrNumber.splice(10,0,'-'); 

    let result = arrNumber.join('');
    //console.log(result);
    return result;
  }

  validatePhoneNumber(...args) {// ырщгдв иу сфддув иуащку 
    console.log(args);
    let arrNumber = args[0].split('');
    let etalon = ['1','2','3','4','5','6','7','8','9','0'];


  }


  editUser(id, options) {
    /*
     options.name
     options.
  */  
  }

  _validate(id, options) {
      /*
     options.name
     options.
  */  
  }
}

const myApp = new PhoneApp();
console.log(myApp);
//-
console.log(myApp.normalizePhoneNumber('0993452845'));
console.log(myApp.validatePhoneNumber('0993452845'));