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


/////RENDER CONTACTS PAGE//////////////////////////////////////////////
const people = 
[
  {
    name: 'Иван',
    lastName: 'Петров',
    email: 'IvanPetrov@ec.ua'
  },
    {
    name: 'Сергей',
    lastName: 'Сергеев',
    email: 'SergeiSergeev@ec.ua'
  },
    {
    name: 'Иван',
    lastName: 'Иванов',
    email: 'IvanIvanov@ec.ua'
  },
    {
    name: 'Александр',
    lastName: 'Александров',
    email: 'AlexAlex@ec.ua'
  },
    {
    name: 'Алекс',
    lastName: 'Смирнов',
    email: 'AlexSmirnov@ec.ua'
  },
    {
    name: 'Сергей',
    lastName: 'Волков',
    email: 'VolkovSergey@ec.ua'
  },
    {
    name: 'Мария',
    lastName: 'Шарапова',
    email: 'MariyaSharapova@ec.ua'
  },
    {
    name: 'Александр',
    lastName: 'Винник',
    email: 'AlexVinnik@ec.ua'
  },
    {
    name: 'Дарий',
    lastName: 'Смирнов',
    email: 'DariySmirnov@ec.ua'
  },
    {
    name: 'Елена',
    lastName: 'Лещенко',
    email: 'ElenaLeshenko@ec.ua'
  },
    {
    name: 'Ольга',
    lastName: 'Новикова',
    email: 'OlgaNovikova@ec.ua'
  },
    {
    name: 'Наталья',
    lastName: 'Шемякина',
    email: 'ShemyakinaN@ec.ua'
  },
    {
    name: 'Анна',
    lastName: 'Донцова',
    email: 'AnnaDontsova@ec.ua'
  },
    {
    name: 'Влад',
    lastName: 'Яма',
    email: 'VladYama@ec.ua'
  },
    {
    name: 'Кира',
    lastName: 'Воробьева',
    email: 'Kira1990@ec.ua'
  },
    {
    name: 'Виктор',
    lastName: 'Кривенко',
    email: 'ViktorKriv@ec.ua'
  }
];

const captions = ['Name', 'Last name', 'Email'];
const footerContent = [
  {
    classImg: 'glyphicon glyphicon-search',
    text: 'Contacts',
    href: 'index.html',
    additionalClass: 'active'
  },
    {
    classImg: 'glyphicon glyphicon-th',
    text: 'Keypad',
    href: 'keypad.html',
    additionalClass: ''
  },
    {
    classImg: 'glyphicon glyphicon-pencil',
    text: 'Edit contact',
    href: 'edit-contact.html',
    additionalClass: ''
  },
    {
    classImg: 'glyphicon glyphicon-user',
    text: 'User',
    href: 'user.html',
    additionalClass: ''
  },
    {
    classImg: 'glyphicon glyphicon-plus',
    text: 'Add user',
    href: 'add-user.html',
    additionalClass: ''
  }
]

const contactsPage = {
  people,
  pageTitle: 'Contacts',
  render() {
    const header = this.newEl('header', null, {className: 'header'});
    const main = this.newEl('main');
    const footer = this.newEl('footer');

    /*creating header*/
    let headerDiv = this.newEl('div', null, {className: 'container top-radius'});
    let headerH2 = this.newEl('h2', 'Contacts');

    headerDiv.appendChild(headerH2);
    header.appendChild(headerDiv);

    /*creating main div*/
    let mainDiv = this.newEl('div', null, {className: 'container'});

    /*creating form*/
    let form = this.newEl('form', null, {className: 'form-inline search-form'});
    let formDiv = this.newEl('div', null, {className: 'form-group'});
    let label = this.newEl('label', 'Search', {className: 'sr-only', forAttr: 'search'});
    let input = this.newEl('input', null, {className: 'form-control', typeAttr: 'text', idAttr:'search', placeholderAttr:'Search'});

    main.appendChild(mainDiv);
    mainDiv.appendChild(form);
    form.appendChild(formDiv);
    formDiv.appendChild(label);
    formDiv.appendChild(input);

    /*creating table & table header*/
    let table = this.newEl('table', null, {className: 'table table-hover contacts'});
    let thead = this.newEl('thead');
    let headRow = this.newEl('tr');

    captions.forEach((item) => {
      let th = this.newEl('th', item);
      headRow.appendChild(th);
    });

    mainDiv.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(headRow);

    /*creating table content*/
    let tbody = this.newEl('tbody');

    table.appendChild(tbody);

    people.forEach((item) => {
      let tr = this.newEl('tr');
      
      for (let key in item) {
        if (key) {
          let td = this.newEl('td', item[key]);
          tr.appendChild(td);
        }
      };

      tbody.appendChild(tr);

    })

    /*creating footer content*/
    let footerDiv = this.newEl('div', null, {className: 'container bottom-radius'});
    let nav = this.newEl('div', null, {className: 'main-nav'});

    footerContent.forEach((item) => {
      let link = this.newEl('a', null, {className: `tab ${item.additionalClass}` , hrefAttr: item.href } );
      let spanImg = this.newEl('span', null, {className: item.classImg, hrefAttr: item.href, ariahiddenAttr: 'true' } );
      let spanText = this.newEl('span', item.text, {className: 'tab-text', hrefAttr: item.href } );

      link.appendChild(spanImg);
      link.appendChild(spanText);

      nav.appendChild(link);
    })



    footer.appendChild(footerDiv);
    footerDiv.appendChild(nav);

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
  },


  newEl(elName, elValue, attributes) {

      let element =  document.createElement(elName);

      if (elValue) {
        element.textContent = elValue;
      };

      if (attributes) {
        this.setAttribute(element, attributes);
      }

      return element;

  },

  setAttribute(element, attributes) {
    let {className, typeAttr, forAttr, idAttr, placeholderAttr, hrefAttr, ariahiddenAttr} = attributes;

/*    if (className) {
      element.classList.add(className);
    };*/
    if (className) {
      element.setAttribute('class', className);
    };

    if (typeAttr) {
      element.setAttribute('type', typeAttr);
    };
    if (forAttr) {
      element.setAttribute('for', forAttr);
    };
    if (idAttr) {
      element.setAttribute('id', idAttr);
    };
    if (placeholderAttr) {
      element.setAttribute('placeholder', placeholderAttr);
    };
    if (hrefAttr) {
      element.setAttribute('href', hrefAttr);
    };
    if (ariahiddenAttr) {
      element.setAttribute('aria-hidden', ariahiddenAttr);
    };  

    return element;
  }

}

contactsPage.render();