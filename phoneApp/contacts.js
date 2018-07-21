'use strict';
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