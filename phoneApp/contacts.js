//index.html/contacts.html - в поле search при вводе буквы,
//добавить поиск по имени если имя включает хотя бы одну эту букву.
//после ввода каждого символа, фильтровать отображаемых пользователей.
//При удалении всех символов отобразить снова весь список

'use strict';

class ContactsPage {
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

  reRenderTable(arr){

    let tableBody = this.createTableBodyRow(arr);

    let pattern =  `<tbody>
                      ${tableBody}
                    </tbody>`;

    let parent = document.querySelector('table');
    let shouldBeReplaced = document.querySelector('tbody');
    parent.removeChild(shouldBeReplaced);

    parent.insertAdjacentHTML('beforeEnd', pattern);
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
    if (!arr) {
      arr = this.people;
    };

    return arr.map(item => {
      return `<tr>
                <td>${item.name}</td>
                <td>${item.lastName}</td>
                <td>${item.email}</td>
              </tr>`;
    }).join('');
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

  renderLink(options) {
    let {href, glyphicon, text, active} = options;
    let activeClass = active ? 'active' : '';

    return `<a href="${href}.html" class="tab ${activeClass}">
              <span class="glyphicon glyphicon-${glyphicon}" aria-hidden="true"></span>
              <span class = "tab-text">${text}</span>
            </a> `
  }

  searchUserHandler() {
    this.searchField = document.querySelector('#search');
    this.searchField.addEventListener('input', this.filterUser.bind(this));
  }

  filterUser() {
    let value = this.searchField.value.toLowerCase();

    let filteredUsers = this.people.filter((item) => { //{name:'ghjk', phone:'37686'}

        if (item.name.toLowerCase().includes(value)) {
          return item;
        }

      return;
    })
    //console.log(filteredUsers);

    this.reRenderTable(filteredUsers);

  }


  setEvents() {
    this.sortColumnsHandler();
    this.searchUserHandler();
  }

  render(users){
    let shouldBeRendered = `
      <header class="header">
        <div class="container top-radius">
          <h2>${this.title}</h2>
        </div>
      </header>

      <main>
        <div class="container mainDiv">
          <form class="form-inline search-form">
            <div class="form-group">
              <label class="sr-only" for="search">Search</label>
              <input type="text" class="form-control" id= "search" placeholder="Search">
            </div>
          </form>

          <table class="table table-hover contacts">
            <thead>
              ${this.createTableHeadRow(this.tableCaptions)}
            </thead>
            <tbody>
              ${this.createTableBodyRow(users)}
            </tbody>
          </table>

        </div>
      </main>

      <footer class="footer">
        <div class="container bottom-radius">
          <nav class="main-nav">
            ${this.renderLink({href:'contacts', glyphicon:'search', text:'Contacts', active: true})}
            ${this.renderLink({href:'keypad', glyphicon:'th', text:'Keypad', active: false})}
            ${this.renderLink({href:'edit-contact', glyphicon:'pencil', text:'Edit contact', active: false})}
            ${this.renderLink({href:'user', glyphicon:'user', text:'User', active: false})}
            ${this.renderLink({href:'add-user', glyphicon:'plus', text:'Add user', active: false})}                                                                                          
          </nav>
        </div>
      </footer>`;

    document.body.innerHTML = shouldBeRendered;
    this.setEvents();
  }
}


const contactsPage = new ContactsPage();
