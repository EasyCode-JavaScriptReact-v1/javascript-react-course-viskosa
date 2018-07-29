//Нужно визуализировать keypad.html - keypad.js

//Структура виртуализации:
// ------ Это 2 разных класса KeypadPage, ContactsPage  -----

//innerHTML по максимуму
//https://aleksandra-maslennikova.github.io/telephone-book/keypad.html

//Сделайте чтобы при нажатии на кнопку цифра отобразилась
//в <span class="numbers">

//https://aleksandra-maslennikova.github.io/telephone-book/index.html
//По клику по заголовку таблицы,
//таблица сортировалась по соответствующему свойству

class KeypadPage {
  constructor(){
  	this.title = 'Keypad';
    this.buttonsValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#', ''];
    this.render();
    //this.buttonsHandler();
  }

  renderHeader(){
    return `<header class="header">
              <div class="container top-radius">
                <h2>${this.title}</h2>
              </div>
            </header>`;
  }

  renderMain(){
    let buttons = this.renderButtons();

    return `<main>
              <div class="container">
              	<div class="number">
					<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
					<span class="numbers"></span>
					<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>
                <div class="keypad-holder">
                	${buttons}
                </div>
              </div>
            </main>`;
  }

  renderButtons(){
  	let buttonsArray = this.buttonsValues.map((item, i, arr) => {

		if ( i == arr.length - 1) {
			return `<button class="key">
						<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
		  			${item}
		  		</button>`;
		};

  		return `<button class="key">${item}</button>`;
  	});

  	return buttonsArray.join('');
  }


  buttonsHandler(){
	let buttonsParent = document.querySelector('.keypad-holder');

	buttonsParent.addEventListener('click', this.clickHandler)

  }


  clickHandler(e){
	let target = e.target;
	let placeToInsertNumbers = document.querySelector('.numbers');

	if (target.classList.contains('key')) {
	   	placeToInsertNumbers.innerHTML += target.textContent;
	}
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
  setEvents(){
  	this.buttonsHandler();
  }

  render(){
    document.body.innerHTML = this.renderHeader() + this.renderMain() + this.renderFooter();
    this.setEvents();
  }
}

const keypad = new KeypadPage();

