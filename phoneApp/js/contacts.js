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

  reRenderTable(arr) {
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
        return `<tr>
                <td>${item.name}</td>
                <td>${item.lastName}</td>
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

      if (item.name.toLowerCase().includes(value)) {
        return item;
      }

      return;
    });
    //console.log(filteredUsers);

    this.reRenderTable(filteredUsers);
  }

  setHandlers() {
    this.sortColumnsHandler();
    this.searchUserHandler();
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
