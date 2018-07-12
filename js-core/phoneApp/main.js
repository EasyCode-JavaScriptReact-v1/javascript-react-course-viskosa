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

function PhoneApp() {
  this.dataBase = [
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
    ]
}

PhoneApp.prototype.editUser = function(id, options) {
  /*
   options.name
   options.
  */  
}

PhoneApp.prototype._validate= function(id, options) {
  /*
   options.name
   options.
  */  
}

const myApp = new PhoneApp();

class PhoneApp (){
  constructor() {
    this.dataBase = [
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
    ]
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