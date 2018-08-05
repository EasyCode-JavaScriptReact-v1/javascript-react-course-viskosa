//add-user при клике:
//index.html/contacts.html - в поле search при вводе буквы,
//добавить поиск по имени если имя включает хотя бы одну эту букву.
//после ввода каждого символа, фильтровать отображаемых пользователей.
//При удалении всех символов отобразить снова весь список

class AddUser {
  constructor(){
    this.render();
  }

  buttonsHandler(){
  	let buttonsParent = document.querySelector('main');
  	buttonsParent.addEventListener('click', this.clickHandler.bind(this));
  }

  clickHandler(e) {

  	let target = e && e.target;
  	if (!target) return;

  	let active = e && e.target && (e.target.closest('button') || e.target.classList.contains('add-btn'));
 	if (active == false) return;

 	let input = active.querySelector('input');
 	input.style.backgroundColor = 'lightgreen';

 	input.addEventListener('blur', () => {
 		input.removeAttribute('style');
 	})

  }

  renderInfo(value) {
  	return `<div class="edit-field">
				<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
					<input type="text" placeholder="${value}"></input>
				</button>
			</div>`;
  }

  renderLink(options) {
    let {href, glyphicon, text, active} = options;
    let activeClass = active ? 'active' : '';

    return `<a href="${href}.html" class="tab ${activeClass}">
              <span class="glyphicon glyphicon-${glyphicon}" aria-hidden="true"></span>
              <span class = "tab-text">${text}</span>
            </a> `
  }

  setEvents(){
  	this.buttonsHandler();
  }
  
  render() {
  	let shouldBeRendered = `
  		<header class="header">
			<div class="container top-radius">
				<nav class="user-top-line">
					<a href="user.html">Cansel</a>
					<button class="done-btn">Done</button>
				</nav>
			</div>
		</header>

		<main class="main">
			<div class="container">
				<div class="edit-main-info">
					<div class="edit-foto">
						<button class="add-foto-btn">
							<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
							<span>add foto</span>
						</button>
					</div>
					<div class="main-info-holder">
						${this.renderInfo('First Name')}
						${this.renderInfo('Last Name')}
						${this.renderInfo('Company')}
					</div>
				</div>
				<div class="scroll-holder">
					<div class="edit-info">
						${this.renderInfo('add mobile phone')}
						${this.renderInfo('add home phone')}
						${this.renderInfo('add email')}
						${this.renderInfo('add address')}
						${this.renderInfo('add birthday')}
						${this.renderInfo('add social profile')}
						${this.renderInfo('add field')}
						<div class="edit-field">
							<button href="#" class="delete-contact">delete contact</button>
						</div>
					</div>
				</div>
			</div>
		</main>

		<footer class="footer">
	      <div class="container bottom-radius">
	        <nav class="main-nav">
	          ${this.renderLink({href:'contacts', glyphicon:'search', text:'Contacts', active: false})}
	          ${this.renderLink({href:'keypad', glyphicon:'th', text:'Keypad', active: false})}
	          ${this.renderLink({href:'edit-contact', glyphicon:'pencil', text:'Edit contact', active: true})}
	          ${this.renderLink({href:'user', glyphicon:'user', text:'User', active: false})}
	          ${this.renderLink({href:'add-user', glyphicon:'plus', text:'Add user', active: false})}                                                                                          
	        </nav>
	      </div>
	    </footer>`;

  	document.body.innerHTML = shouldBeRendered;
    this.setEvents();
  }
}

const addUser = new AddUser;