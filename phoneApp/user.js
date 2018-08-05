class User {
  constructor(){
  	this.mobileNumber = '+38 (093) 989 89 89';
  	this.homeNumber = '+38 (067) 989 89 89';  	
    this.render();
  }

  renderOptions(options) {
  	let {glyphicon, text} = options;

  	return `<div class="${text}">
				<div class="options-icon"><span class="icon glyphicon glyphicon-${glyphicon}" aria-hidden="true"></span></div>
				<span class="options-text">${text}</span>
			</div>`;
  }

  renderLink(options) {
    let {href, glyphicon, text, active} = options;
    let activeClass = active ? 'active' : '';

    return `<a href="${href}.html" class="tab ${activeClass}">
              <span class="glyphicon glyphicon-${glyphicon}" aria-hidden="true"></span>
              <span class = "tab-text">${text}</span>
            </a> `;
  }

  render() {
  	let shouldBeRendered = `
	<header class="header">
		<div class="container top-radius">
			<div class="user-top-line">
				<a href="index.html">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					Contacts</a>
					<a href="edit-contact.html">Edit</a>
				</div>
			</div>
		</header>

		<main class="main">
			<div class="container">
				<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
				<div class="user-name">User Name</div>
				<div class="options-line">
					${this.renderOptions({glyphicon:'comment', text:'message'})}
					${this.renderOptions({glyphicon:'earphone', text:'call'})}				
					${this.renderOptions({glyphicon:'facetime-video', text:'video'})}	
					${this.renderOptions({glyphicon:'envelope', text:'mail'})}
				</div>
				<div class="tel-number">
					<h3>mobile</h3>
					<div>${this.mobileNumber}</div>
				</div>
				<div class="tel-number">
					<h3>home</h3>
					<div>${this.homeNumber}</div>
				</div>
				<div class="options-table">
					<div class ="options-item"><a href="#">Notes</a></div>
					<div class ="options-item"><a href="#">Send message</a></div>
					<div class ="options-item"><a href="#">Share contact</a></div>
					<div class ="options-item"><a href="#">Add to favorites</a></div>
					<div class ="options-item"><a href="#">Share my location</a></div>
					<div class ="options-item"><a href="#">Block this caller</a></div>
				</div>
			</div>
		</main>

		<footer class="footer">
	      <div class="container bottom-radius">
	        <nav class="main-nav">
	          ${this.renderLink({href:'contacts', glyphicon:'search', text:'Contacts', active: false})}
	          ${this.renderLink({href:'keypad', glyphicon:'th', text:'Keypad', active: false})}
	          ${this.renderLink({href:'edit-contact', glyphicon:'pencil', text:'Edit contact', active: false})}
	          ${this.renderLink({href:'user', glyphicon:'user', text:'User', active: true})}
	          ${this.renderLink({href:'add-user', glyphicon:'plus', text:'Add user', active: false})}                                                                                          
	        </nav>
	      </div>
	    </footer>`;

  	document.body.innerHTML = shouldBeRendered;
    //this.setEvents();
  }
}

const user = new User;