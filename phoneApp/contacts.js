'use strict';
/////RENDER CONTACTS PAGE//////////////////////////////////////////////
/*class ContactsPage {
  constructor(){
    this.tableCaptions = ['Name', 'Last name', 'Email'];
    this.people = [
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
    this.footerContent = [
      {
        classImg: 'search',
        text: 'Contacts',
        href: 'index.html',
        additionalClass: 'active'
      },
        {
        classImg: 'th',
        text: 'Keypad',
        href: 'keypad.html',
        additionalClass: ''
      },
        {
        classImg: 'pencil',
        text: 'Edit contact',
        href: 'edit-contact.html',
        additionalClass: ''
      },
        {
        classImg: 'user',
        text: 'User',
        href: 'user.html',
        additionalClass: ''
      },
        {
        classImg: 'plus',
        text: 'Add user',
        href: 'add-user.html',
        additionalClass: ''
      }
    ];
    this.body = document.body;

    this.render();
  }

  createEl(tagName, tagContent){
    //return `<${tagName}></${tagName}>`;
    let newEl = document.createElement(tagName);
      if (tagContent) {
        newEl.textContent = tagContent;
      };
    return newEl;
  }

  renderHeader(){
    let header = this.createEl('header');
    header.setAttribute('class', 'header');
    this.body.appendChild(header);

    let headerDiv = this.createEl('div');
    headerDiv.setAttribute('class', 'container top-radius');
    header.appendChild(headerDiv);

    let headerH2 = this.createEl('h2', 'Contacts');
    headerDiv.appendChild(headerH2);
  }

  renderMain(){
    let main = this.createEl('main');
    this.body.appendChild(main);

    let mainDiv = this.createEl('div');
    mainDiv.setAttribute('class', 'container mainDiv');
    main.appendChild(mainDiv);

    this.mainDivInserted = document.querySelector('.mainDiv');
    this.mainDivInserted.innerHTML = this.renderForm();

    this.renderTable();
  }

  renderForm(){  // может надо было тоже через createElement? Как понять, что нужно через createElement, а что просто кусками верстки?
    return  `<form class="form-inline search-form">
              <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id= "search" placeholder="Search">
              </div>
            </form>`;
  }

  renderTable(){
    let table = this.createEl('table');
    table.setAttribute('class', 'table table-hover contacts');
    this.mainDivInserted.appendChild(table);

    let tableHead = this.createEl('thead');
    table.appendChild(tableHead);

    let tableBody = this.createEl('tbody');
    table.appendChild(tableBody);

    document.querySelector('thead').innerHTML = this.createTableHeadRow(this.tableCaptions);
    document.querySelector('tbody').innerHTML += this.createTableBodyRow(this.people);

  }

  createTableHeadRow(arr){
      let items = arr.map(item => {
            return `<th>${item}</th>`

      }).join('');

      return `<tr>
                  ${items}
              </tr>`
  }

  createTableBodyRow(arr){
      return arr.map(item => {
        return `<tr>
                  <td>${item.name}</td>
                  <td>${item.lastName}</td>
                  <td>${item.email}</td>
                </tr>`;
      }).join('');
  }

  renderFooter(){
    let footer = this.createEl('footer');
    footer.setAttribute('class', 'footer');
    this.body.appendChild(footer);

    let footerDiv = this.createEl('div');
    footerDiv.setAttribute('class', 'container bottom-radius');
    footer.appendChild(footerDiv);

    let footerNav = this.createEl('nav');
    footerNav.setAttribute('class', 'main-nav');
    footerDiv.appendChild(footerNav);

    document.querySelector('.main-nav').innerHTML += this.createLinks(this.footerContent);
  }

  createLinks(arr){
    return arr.map(item => {
      return `<a href="${item.href}" class="tab ${item.additionalClass}">
                  <span class="glyphicon glyphicon-${item.classImg}" aria-hidden="true"></span>
                  <span class="tab-text">${item.text}</span>
              </a>`;
    }).join('');

  }

  render(){
    this.renderHeader();
    this.renderMain();
    this.renderFooter();
  }

}

const contactsPage = new ContactsPage();*/


//------------------------ THE SECOND VARIANT - I LIKE IT MORE ------------------------------//

class ContactsPage2 {
  constructor(){
    this.title = 'Contacts';
    this.tableCaptions = ['Name', 'Last name', 'Email'];
    this.people = [
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

    this.render();
  }

  renderHeader(){
    return `<header class="header">
              <div class="container top-radius">
                <h2>${this.title}</h2>
              </div>
            </header>`;
  }

  renderMain(){
    let form = this.renderForm();
    let table = this.renderTable();

    return `<main>
              <div class="container mainDiv">
                ${form}
                ${table}
              </div>
            </main>`;
  }

  renderForm(){ 
    return  `<form class="form-inline search-form">
              <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id= "search" placeholder="Search">
              </div>
            </form>`;
  }

  renderTable(){
    let tableHead = this.createTableHeadRow(this.tableCaptions);
    let tableBody = this.createTableBodyRow(this.people);

    return `<table class="table table-hover contacts">
                <thead>
                    ${tableHead}
                </thead>
                ${tableBody}
            </table>`;
  }

  createTableHeadRow(arr){
      let items = arr.map(item => {
            return `<th>${item}</th>`

      }).join('');

      return `<tr>
                  ${items}
              </tr>`
  }

  createTableBodyRow(arr){
      return arr.map(item => {
        return `<tr>
                  <td>${item.name}</td>
                  <td>${item.lastName}</td>
                  <td>${item.email}</td>
                </tr>`;
      }).join('');
  }

  renderFooter(){
    return `<footer class="footer">
              <div class="container bottom-radius">
                <nav class="main-nav">
                  <a href="contacts.html" class="tab active">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    <span class = "tab-text">Contacts</span>
                  </a>
                  <a href="keypad.html" class="tab">
                    <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
                    <span class = "tab-text">Keypad</span>
                  </a>
                  <a href="edit-contact.html" class="tab">
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span class = "tab-text">Edit contact</span>
                  </a>
                  <a href="user.html" class="tab">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    <span class = "tab-text">User</span>
                  </a>
                  <a href="add-user.html" class="tab">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    <span class = "tab-text">Add user</span>
                  </a>
                </nav>
              </div>
            </footer>`
  }

  sortColumnsHandler() {
    let parent = document.querySelector('thead');
    parent.addEventListener('click', this.sortColumns.bind(this));
  }

  sortColumns() {
    let target = event.target;

    this.tableCaptions.forEach((item) => {
      if (target.textContent == item) {
          item = this.makeCamelCase(item);
          this.sortUsers(item);
          this.render();
      }
    })
  }

  makeCamelCase(str){
    str = str.toLowerCase();

    if (str.includes(' ')) {        //'last name'
        let arr = str.split(' ');   //['last', 'name']

        let capitalizedArr = arr.map((item, i) => {
            if ( i > 0) {
              let itemToArray =  item.split(''); //['n', 'a', 'm', 'e']
              let firstLetter = itemToArray[0].toUpperCase();
              itemToArray.splice(0, 1, firstLetter);
              return itemToArray.join('');
            } 
            return item;
        }); // end of map

       str =  capitalizedArr.join('');
    };

    return str;
  }

  sortUsers(str) {
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
      //console.log(this.people.sort(compare))
      return this.people.sort(compare);
  }

  setEvents() {
    this.sortColumnsHandler();
  }

  render(){
    document.body.innerHTML = this.renderHeader() + this.renderMain() + this.renderFooter();
    this.setEvents();
  }

}

const contactsPage2 = new ContactsPage2();
