class Footer {
  constructor(){
    this.renderFooter();
  }

  renderFooter() {
    document.body.innerHTML += this.createFooter();
  }

  createFooter(){
      return `<footer class="footer">
                <div class="container bottom-radius">
                  <nav class="main-nav">
                    <a href="index.html" class="tab active">
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

}

const footer = new Footer();

