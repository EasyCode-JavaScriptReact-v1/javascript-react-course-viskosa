'use strict';


/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__

 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных

 - База хранит информацию о пользователях //
 - Пользователи знают мыло админа  //
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных //
 *
 * */
function Guest(name){
   this.guestName = name;
}

function User(name){
   this.userName = name;
}

function Database(name){
  this.dbName = name;
  this.users = [];
  this.password = 'qwerty';
}

Database.prototype.createNewUser = function(user){
  let newUser = new User(user);
  console.log(newUser);

  this.users.push(newUser);
}

/*Database.prototype.showPassword = function(){
  console.log('------------',this.password);
}*/

/*Guest.prototype.canRegister = function(){
  let newUser
}*/

//---------------------
let guest = new Guest('guest-1');
console.log(guest);

let commonUser = new User('Karl');
console.log(commonUser);

let admin = new User('Admin');
console.log(admin);

let db = new Database('mongoDB');
console.log(db);

User.prototype = {//у всех экземпляров, созданных через new User, в __proto__ prototype будет лежать adminMail: 'admin@admin.com'
  adminMail: 'admin@admin.com'
}

admin.dbPassword = 'qwerty';
//db.showPassword();

db.createNewUser('user-1');
db.createNewUser('user-2');

