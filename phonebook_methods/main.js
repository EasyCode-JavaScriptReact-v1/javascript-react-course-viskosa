'use strict';
/*Создайте функцию конструктор.
У данной функции должны быть методы:

1. Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
2. Проверка, что телефонный номер содержит только числа
3. Добавление пользователей в справочник
4. Удаление пользователя по имени, фамилии
5. Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
6. Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
7. Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
8. Фильтр по указанному свойству*/

//---------------------------------------------PHONE APP STARTS---------------------------------------------
class PhoneApp {
  constructor() {
    this.dataBase = [
        {id:1, name:'Nataliia', surname: 'Protsenko', phone:'0677967036', company: 'UZ'},
        {id:2, name:'Ivan',  surname: 'Ivanov', phone:'0507967036', company: 'Ukrtelecom'},
        {id:3, name:'Petr', surname: 'Petrov', phone:'0637967036', company: 'Kyivsatr'},
        {id:4, name:'Ivan', surname: 'Smith', phone:'0967967036', company: 'Ukrtelecom'},
    ]
  }

  //1. Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
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

  //2. Проверка, что телефонный номер содержит только числа
  validatePhoneNumber(str) {    // shold be called before normalizePhoneNumber
    let arrNumber = str.split('');
    let res = arrNumber.every((item) => !isNaN(+item));//почему если !isNaN(+item) заключить в фигурные скобки, то не работает?
    //не проверяет на пробелы!!!!!
    //console.log(res);
    return res;
  }

  //3. Добавление пользователей в справочник
  createUser(options) {
    let {name, surname, phone, company} = options;
    let id = Math.round(Math.random()*100);

    let newUser = {};
    newUser.id = id;
    newUser.name = name;
    newUser.surname = surname;
    newUser.phone = phone;
    newUser.company = company;

    this.dataBase.push(newUser);

    console.log(this.dataBase);
  }

  //4. Удаление пользователя по имени, фамилии - удаляет сразу всех найденных Иванов!!! 
  deleteUser(str){

    this.dataBase.forEach((item) => {

        let values = Object.values(item);                    // берем все значения у объекта пользователя
        let isConsist = values.some((elem) => (elem == str));// проверяем, есть ли такое значение, как нам нужно

        if (isConsist) {                                     //если есть - ищем, индекс, где находится
          let index = this.dataBase.indexOf(item);
          //console.log(index);
          this.dataBase.splice(index, 1); //и удаляем его
          console.log(this.dataBase);
          return;
        } 
            
    })
      console.log('There is no such user');  
  }

  //5. Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
  searchUser(str){
      let searchedUsers = [];

      this.dataBase.forEach((item) => {

          let values = Object.values(item);                    // берем все значения у объекта пользователя
          let isConsist = values.some((elem) => (elem == str));// проверяем, есть ли такое значение, как нам нужно

          if (isConsist) {                                     //если есть -пушим объект в новый массив
            searchedUsers.push(item);
            console.log(searchedUsers);
            return searchedUsers;
          } 
              
      })

      console.log('There is no such user');  

  }
  //6. Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
  changeInfo(id, options){
    let {name, surname, phone, company} = options;

    this.dataBase.map((item) => {
        if (item.id == id) {
            if (name) {
              item.name = name;
            };
            if (surname) {
              item.surname = surname;
            };
            if (phone) {
              item.phone = phone;
            };
            if (company) {
              item.company = company;
            }; 
        }
    })
    return this.dataBase;
  }

  //7. Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
  sortUsers(str){

     function compare(a, b){
        if (isNaN(a[str])) {

           if (a[str] > b[str]) {
              return 1;
           };
           if (a[str] < b[str]) {
              return -1;
           };
           if (a[str] == b[str]) {
              return 0;
           }

        } else {
           return (a[str] - b[str]);
        }

     }

    return this.dataBase.sort(compare);
  }

  //8. Фильтр по указанному свойству
  filterUsers(str){
    return this.dataBase.filter((item) => {//создает массив из объектов, у которых есть переданное свойство
        if (item[str]) {
          return item;
        }
    });
  }

}

const myApp = new PhoneApp();
console.log(myApp);
//-
console.log(myApp.normalizePhoneNumber('0993452845'));
console.log(myApp.validatePhoneNumber('0993452845'));
myApp.createUser({name:'Svetlana', surname: 'Lash', phone: '0981111111', company:'EPAM'});
myApp.createUser({name:'Sergey', surname: 'Barchan', company:'DataArt'});// without phone number
myApp.searchUser('Ivan');
console.log(myApp.sortUsers('name'));
console.log(myApp.filterUsers('phone'));
console.log(myApp.filterUsers('company'));

console.log(myApp.changeInfo(2, {name: 'Stepan', company:'Facebook'}));
console.log(myApp.changeInfo(3, {phone: '0778888888', company:'Google'}));
myApp.deleteUser('Ivan');
myApp.deleteUser('DataArt');


