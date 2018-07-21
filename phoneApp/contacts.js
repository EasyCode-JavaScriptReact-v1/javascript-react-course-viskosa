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

    this.render();
  }

  renderHeader(){
    return `<header class="header">
              <div class="container top-radius">
                <h2>Contacts</h2>
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
                    ${tableHead}
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
    let links = this.createLinks(this.footerContent)
    return `<footer class="footer">
              <div class="container bottom-radius">
                <nav class="main-nav">
                  ${links}
                </nav>
              </div>
            </footer>`
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
    document.body.innerHTML = this.renderHeader() + this.renderMain() + this.renderFooter();
  }

}

const contactsPage2 = new ContactsPage2();