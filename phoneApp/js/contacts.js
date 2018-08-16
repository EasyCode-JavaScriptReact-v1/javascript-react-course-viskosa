//index.html/contacts.html - в поле search при вводе буквы,
//добавить поиск по имени если имя включает хотя бы одну эту букву.
//после ввода каждого символа, фильтровать отображаемых пользователей.
//При удалении всех символов отобразить снова весь список

"use strict";

class ContactsPage {
  constructor(globalState) {
    this.state = globalState; //стал равен this.state-у со страницы App.js

    this.title = "Contacts";
    this.tableCaptions = ["Name", "Last name", "Email"];
  }

  /*separateFullName(fullName) {
    return [name, surname] = fullName.split(' ');
  }*/

  reRenderTable(arr) {
    // сделать, чтобы это был один метод рендера и лежал он в app.js
    let tableBody = this.createTableBodyRow(arr);

    let pattern = `<tbody>
                      ${tableBody}
                   </tbody>`;

    let parent = document.querySelector("table");
    let shouldBeReplaced = document.querySelector("tbody");
    parent.removeChild(shouldBeReplaced);

    parent.insertAdjacentHTML("beforeEnd", pattern);
  }

  createTableHeadRow(arr) {
    let items = arr
      .map(item => {
        return `<th>${item}</th>`;
      })
      .join("");

    return `<tr>
                  ${items}
            </tr>`;
  }

  createTableBodyRow(arr) {
    if (!arr) {
      arr = this.state.people;
    }

    return arr
      .map(item => {
        const [name, surname] = item.fullName.split(" "); //////////////////////////////

        return `<tr>
                <td>${name}</td>
                <td>${surname}</td>
                <td>${item.email}</td>
              </tr>`;
      })
      .join("");
  }

  sortColumnsHandler() {
    let parent = document.querySelector("thead");
    parent.addEventListener("click", this.sortColumns.bind(this));
  }

  sortColumns() {
    let target = event.target;

    this.tableCaptions.forEach(item => {
      if (target.textContent == item) {
        item = this.makeCamelCase(item);

        let sorted = this.sortUsers(item);
        console.log(sorted);
        this.reRenderTable(sorted);
      }
    });
  }

  makeCamelCase(str) {
    str = str.toLowerCase();

    if (str.includes(" ")) {
      //'last name'
      let arr = str.split(" "); //['last', 'name']

      let capitalizedArr = arr.map((item, i) => {
        if (i > 0) {
          let itemToArray = item.split(""); //['n', 'a', 'm', 'e']
          let firstLetter = itemToArray[0].toUpperCase();
          itemToArray.splice(0, 1, firstLetter);
          return itemToArray.join("");
        }
        return item;
      }); // end of map

      str = capitalizedArr.join("");
    }

    return str;
  }

  sortUsers(str) {
    console.log(str); //тут опять нужно делить фуллнейм - вынести дележ этот в отдельную ф-цию?
    function compare(a, b) {
      if (isNaN(a[str])) {
        if (a[str] > b[str]) {
          return 1;
        }
        if (a[str] < b[str]) {
          return -1;
        }
        if (a[str] == b[str]) {
          return 0;
        }
      } else {
        return a[str] - b[str];
      }
    }
    //console.log(this.state.people.sort(compare))
    return this.state.people.sort(compare);
  }

  searchUserHandler() {
    this.searchField = document.querySelector("#search");
    this.searchField.addEventListener("input", this.filterUser.bind(this));
  }

  filterUser() {
    let value = this.searchField.value.toLowerCase();

    let filteredUsers = this.state.people.filter(item => {
      let name = item.fullName.split(" ")[0];

      if (name.toLowerCase().includes(value)) {
        return item;
      }

      return;
    });
    //console.log(filteredUsers);

    this.reRenderTable(filteredUsers);
  }

  showUserCardHandler() {
    let parent = document.querySelector("tbody");
    parent.addEventListener("click", this.showUserCard.bind(this));
  }

  showUserCard(e) {
    let target = e && e.target;

    if (target.tagName === "TD") {
      let targetValue = target.textContent; //Ivan
      console.log(targetValue)
      let foundUsers = [];

      this.state.people.forEach(item => {

/*        if (targetValue.includes('@')) {
          console.log(123)
          foundUsers.push(item);
          return;
        }
        //-------------------
        let currentTarget = target;
        let tr = currentTarget.closest('tr');
        console.log(currentTarget, tr);
        [...tr.children].forEach((td) => {
            if (td.textContent.includes('@')) {
              console.log(78)
              foundUsers.push(item);
              return;
            }
        })*/
//-----------------------------------------------------нихрена неправильно работает!!!!!!!!!!!!!!!!!!!!!!
        for (let key in item) {
          if (item[key] == targetValue && targetValue.includes('@')) {
            foundUsers.push(item);
          }; //end of if

          if (key === "fullName" && item[key].includes(targetValue)) {
            let currentTarget = target;

            let tr = currentTarget.closest('tr');

            //[...tr.children].forEach((td) => {
            for (let i = 0; i < tr.children; i++) {
              if (tr.children[i].includes('@')) {
                  foundUsers.push(item);
                  return;
              }          
            }


            //});

          }; //end of if
        } //end of for
      }); //end of forEach

      console.log(foundUsers);
    }
  }

  setHandlers() {
    this.sortColumnsHandler();
    this.searchUserHandler();
    this.showUserCardHandler();
  }

  render(users) {
    return `
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
      </main>`;
  }
}
