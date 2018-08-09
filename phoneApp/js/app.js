class App {
	constructor(){
		this.state = {	//равен ссылке, которая ведет на объект
			people: [
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
				    ],
			activePage: 'contacts'
		};

        this.pages = {
            contacts: new ContactsPage(this.state),	// тут передали ссылку на this.state
			adduser: new AddUser(this.state),
            keypad: new KeypadPage(this.state),
            editcontact: new EditContact(this.state),
            user: new User(this.state)
        };

        this.initializeRouter();
        this.switchRouter();

    }

    initializeRouter () {
        const mountNode = document.getElementById('mountNode');
        //console.log(mountNode);
        mountNode.innerHTML = `
        <div id="app"></div>
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

         //this.initializeRouterHandlers();
         this.appDOMNode = mountNode.querySelector('#app');	// сюда будем делать рендер всех страниц 
		   													// и это не будет затрагивать футер и его события
    }

	renderNewPage() {

		this.appDOMNode.innerHTML = this.pages[this.state.activePage].render();
	}

	renderLink(options) {
		let {href, glyphicon, text, active} = options;
		let activeClass = active ? 'active' : '';

		return `<a href="${href}" class="tab ${activeClass}">
		          <span class="glyphicon glyphicon-${glyphicon}" aria-hidden="true"></span>
		          <span class = "tab-text">${text}</span>
		        </a> `
	}


    switchRouter() {
    	const parent = document.querySelector('.main-nav');
    	parent.addEventListener('click', (e) => {
    		e.preventDefault();
    		//let target = e && e.target;
    		let target = e && e.target && (e.target.closest('a') || e.target.classList.contains('tab'));
 			if (target == false) return;

    		//console.log(target);

    		if (target.classList.contains('active')) return;
    		if (target.classList.contains('tab')) {
    			let active = document.querySelector('.active');

    			active.classList.remove('active');
    			target.classList.add('active');

    			let href = target.getAttribute('href');
    			//console.log(href);
    			this.state.activePage = href.replace(/-/g, '').toLowerCase();
    			//console.log(this.state.activePage);
    			this.renderNewPage();
    		}
    		return;
    	})
    }
    // updateView() {
    //     const activePage = this.state.activePage;
    //     this.pages[activePage].updateState(this.state); //updateState делаем на каждой странице
    //
    // }
    render() {
        const {activePage} = this.state;
        //const activePage = this.state.activePage; 	// то же самое

        // this.updateView();
        this.appDOMNode.innerHTML = this.pages[activePage].render();	// и отрендерь ту страничку, 
        									// которая сейчас указана как activePage в this.state

    }
}

const app = new App();
app.render();