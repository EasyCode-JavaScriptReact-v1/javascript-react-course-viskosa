//REVIEW HOMEWORK 11---------------------------
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

const user = {};

const admin = {
	email: 'admin@admin.com',
};

const guest = {};

const database = {
	users: [],
	password: 'secret_password',
	register() {
		console.log('YOU ARE IN')
	}
};

 guest.__proto__ = user;
 user.__proto__ = admin;
 admin.__proto__ = database;

console.log('guest', guest);
console.log('user', user);
console.log('database', database);
guest.register();

//---ЕЩЕ РАЗ ПРО НАСЛЕДОВАНИЕ----------------------------------
var car = {
  wheel: 4
};

var mustang = {
  door: '2/3/4'
}
mustang.wheel = 4;//добавили в объект мустанг 4 колеса

mustang.__proto__ = car;//в __proto__ мустанга записали объект car
                        //теперь у мутсанга есть door: '2/3/4' и wheel: 4, и в __proto__ опять есть wheel: 4

car.color = 'red';//в объект car дописали свойство color: 'red', и теперь это свойство отобразится и в __proto__ мустанга
                  //т.е. можем обратиться mustang.color и получим red 

delete mustang.wheel//удалили собственное свойство мустанга wheel: 4, но в __proto__ осталось wheel: 4 от саr
mustang.wheel// все равно получим 4

mustang.color = 'green';//так мы добавим цвет самому объекту мустанг, в его прото останется красный цвет от кар

var someMethod = { //создаем какой-то метод - тут только через объект, напрямую через ф-цию не прокатывает
	toDo(){			//это если хотим добавить его кому-то в прото, тогда только через объект
		console.log(this.color);
	}
}

car.__proto__ = someMethod;//и записываем его в прото car-у

console.log(mustang);//у мустанга в __proto__.__proto__ запишется метод toDo
mustang.toDo();//green

car.makeBeeeeep = function(){ //можем в car добавить функцию, и все равно она будет доступна из мустанга
	console.log('beep');
}
mustang.makeBeeeeep();//beep


//--НАСЛЕДОВАНИЕ--------------------------------------------------

//Наследование -это когда дочерний класс(экземпляр) наследует методы или свойства родительского класса

//Сделайте человека, который может -> drink coffe

//Сделайте программиста -> умеет делать createHelloWorld

//Сделайте Васю сначала человеком
//А потом научите васю вызывать метод createHelloWorld

function Human(name){
	this.name = name;
}

function Programmer(name){
}

Programmer.prototype.createHelloWorld = function(){
	console.log(this.name + ' can make Hello world!');
}

Human.prototype = Object.create(Programmer.prototype);//наследуемся от программиста, чтобы 
													//	человек мог потом делать createHelloWorld
													//если бы это было ниже, чем Human.prototype.drinkCoffe, то это бы
													//перезаписало прототип и вытерло бы оттуда Human.prototype.drinkCoffe
Human.prototype.drinkCoffe = function(){
	//console.log(this.name + ' can drink coffe');
	return this.name + ' can drink coffe';
}

let vasya = new Human('Vasiliy');
console.log(vasya);
console.log(vasya.drinkCoffe());

vasya.createHelloWorld();



//-----------ТО ЖЕ ЧЕРЕЗ CALL------------------------------------
function Human2(name, age){
	/*this -> Developer*/ // когда произойдет колл из Developer, this станет ссылаться на Developer
	this.name = name;
	this.age = age;
}

Human2.prototype.drinkCoffe = function(){
	console.log(this.name + ' drink drink');
}

//function Developer(name, age){
	/*тут неявно создается объект и this устанавливается в Developer*/

	//Human2.call(this, name, age)//Human2 - это ф-ция конструктор, следовательно, у нее можно вызвать call или apply
						
	/*тут неявно вернется этот this, он же вновь созданный объект*/
//}

//Но еще лучше писать так:::-------------------------

function Developer(...args){
	/*args -> [] это массив*/
	Human2.apply(this, args)// Human2 - ф-ция конструктор, следовательно, у нее можно вызвать call или apply. This здесь это Developer
							// при вызове строки const Genry = new Developer('Genry', 32) в args приходит массив ['Genry', 32]
							// когда происходит apply, мы попадаем в Human2, там name становится Genry, age становится 32, 
							// и this начинает ссылаться на Developer
	this.skills = ['JS', 'HTML'];//если дописать еще и скилы, то после того, как выполнится call, this будет равняться Developer, 
								// у которого уже есть name: Genry и age: 32, и теперь еще добавляется свойство skills 
								// и в итоге будет Developer {name: "Genry", age: 32, skills: ['JS', 'HTML'])}
}

//но пока что Генри не может пить кофе, т.к. при таком наследовании прототип не наследуется. Поэтому пишем:

Developer.prototype = Object.create(Human2.prototype);//создаем объект, который лежит в прототипе хьюмана, 
													// т.е. возьмет только метод drinkCoffe, внутренние свойства 
													//name и age не возьмет
//Developer.prototype = new Human2('oleg', 25)//если наследоваться так, то возьмет только свойства ф-ции конструктора name и age,
											// метод drinkCoffe не возьмет. Кроме своих name и age еще и в прото их еще раз установит

const Genry = new Developer('Genry', 32);
console.log('Genry-->', Genry);// Genry--> Developer {name: "Genry", age: 32}


// ИНКАПСУЛЯЦИЯ--------------------------------
// ИНКАПСУЛЯЦИЯ - ЭТО ОТДЕЛЕНИЕ СВОЙСТВ ОДНОГО ОБЪЕКТА ОТ ДРУГОГО
// ИНКАПСУЛЯЦИЯ - это создание скрытых методов и свойств. Бывают ПУБЛИЧНЫЕ, ПРИВАТНЫЕ И ЗАЩИЩИЕННЫЕ
// Все, что какасется инкапсуляции, касается функций-конструкторов и всего, что с ними связано

// ПУБЛИЧНЫЕ МЕТОДЫ
//Например, публичный метод это
	Human2.prototype.eatFood = function(){
		console.log(this.name + ' I am eating');
	}

// ЗАЩИЩЕННЫЕ МЕТОДЫ
	Human2.prototype._receiveCash = function(){ //существует контракт, по которому если перед методом стоит подчеркивание,
		console.log(this.name + 'got money');	// то этот метод защищенный. Это секретный язык девелоперов
	}

//Например:

	Human2.prototype.drinkCola = function(){ //подразумевается, что этим методом может пользоваться разработчик, это публичный метод
		this._createLogMessage('DRINK COLA');
	}

	Human2.prototype.eatBurger = function(){ //подразумевается, что этим методом может пользоваться разработчик, это публичный метод
		this._createLogMessage('EAT BURGER');
	}

	Human2.prototype._createLogMessage = function(message){// подразумевается, что этим методом пользуется Human2 где-то внутри себя. 
		console.error(message);	//Типа эй, если ты сделал себе нового Human2, не вызывай у него метод _createLogMessage
	}
	
// ПРИВАТНЫЕ МЕТОДЫ
// Приватные методы пишутся прямо в конструкторе. Это такие, которые мы никак не можем вызвать извне. Например, мы не можем вызвать
// у вновь созданного Васи secretMessage:

function Human3(name, age) {
	this.name = name;
	this.age = age;

	let secreteMessage = '1233 4566 7788 9900'; //номер карты например
	this.getSecreteMessage = function(){ // вернуть номер карты
		return secreteMessage;			// только таким образом можно получить доступ к secreteMessage
	}

	this.setSecreteMessage = function(newMessage){ //установить номер карты

	}

}

//---------------------------------------------
/*	Задача
	Создать AutorizedUser, у которого:
	имя пользователя является публичным
	пароль секретный(приватный)

	у вас есть метод showUserCashe
	при вызове у пользователя showUserCashe
	если передали правильный пароль - узнаете, сколько есть наличных
	если неправильный - ошибка

	addCash(cashToAdd) увеличивает кеш на переданный аргумент*/

function AutorizedUser(name, password, cash){
	this.name = name;//me
	let myPassword = password;//secret 
	let myCash = cash;
	//---------------------------------------------------------
	this.showUserCashe = function (userPwd) {// чтобы получить доступ к паролю и кешу, пишем приватный метод
		if (this._isPasswordValid (userPwd, myPassword)) { // if true
			console.log(myCash);
			return;
		}
		console.error('ERROR 505'); //if false
	}
	//---------------------------------------------------------
	this.addCash = function(sum, pwd){
		if (this._isPasswordValid(pwd)) {
			myCash = myCash + sum;
			console.log("You successfully added cash");
			return;
		} 
		console.error('You entered not valid password!')
	}
	//----------------------------------------------------------
}

AutorizedUser.prototype._isPasswordValid = function(pwd, pwdToCompare){  //публичный метод, но защищенный
	return pwd === pwdToCompare; // true or false
}

var me = new AutorizedUser('me', 'secret', 3500);
console.log(me);

me.showUserCashe('ohoho') //-> ERROR 505;
me.showUserCashe('secret') //-> 3500;
me.addCash(7000, 'fdhth') //
me.addCash(7000, 'secret') //-> SUCCESS;
me.showUserCashe('secret') //-> 10500;
me.addCash(7000, 'secret') //-> SUCCESS;
me.showUserCashe('hdjytdue') //-> 10500;
me.showUserCashe('secret') //-> 10500;