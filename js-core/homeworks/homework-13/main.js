//'use strict';

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

//-----------------------------------------------------------------
// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

 // ---- родительский класс ----
/*function Human(options){
	let {name, age, sex, height, weight} = options;

	this.name = name;
	this. age = age;
	this.sex = sex;
	this.height = height;
	this.weight = weight;
} */
class Human {
	constructor(options){
		let {name, age, sex, height, weight} = options;

		this.name = name;
		this. age = age;
		this.sex = sex;
		this.height = height;
		this.weight = weight;
	}
}

//--------------класс-наследник worker-----------------------
/*function Worker(options){	//сюда пришел объект переданных свойств
	let {job, salary, ...humanProps} = options;

	Human.call(this, humanProps);//call, а не apply потому что humanProps - это объект, а не массив

	this.job = job;
	this.salary = salary;
}*/

/*Worker.prototype = Object.create(Human.prototype);

Worker.prototype.working = function(){
	console.log(this.name + ' can work');
}*/

class Worker extends Human {
	constructor({job, salary, ...rest}){ //так писать нормально или лучше сюда принять options, а ниже деструктурировать?
		super(rest);

		this.job = job;
		this.salary = salary;
	}

	working(){
		console.log(this.name + ' can work');
	}

}

//--------------student-----------------------

/*function Student(options){
	let {univer, scolarship, ...rest} = options;

	Human.call(this, rest);

	this.univer = univer;
	this.scolarship = scolarship;
}

Student.prototype = Object.create(Human.prototype);

Student.prototype.toSeeMovies = function(){
	console.log(this.name + ' can see movies');
}*/

class Student extends Human {
	constructor({univer, scolarship, ...rest}){
		super(rest);
	}

	toSeeMovies() {
		console.log(this.name + ' can see movies');
	}
}

let workerAndrew = new Worker({name:'Andrew', age:23, sex:'male', height:186, weight:80, job: 'pilot', salary: 10000});
console.log(workerAndrew);
workerAndrew.working();


let studentAlla = new Student({sex:'female', height:160, name:'Alla', age:19, weight:55, univer: 'KIMO', scolarship: false});
console.log(studentAlla);
studentAlla.toSeeMovies();

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
	constructor(){
		this.counter = 5;
		//this.timer = null;
	}

	counterFunc() {
		return this.counter--;
	}

	timeoutFunc() {
		let now = this.counterFunc();

		if ( now > 0) {
			console.log(now);
			this.query();
			return;
		}
		console.log('The web server is down');
	}

	query() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(this.timeoutFunc.bind(this), 1000);//прибинди к ф-ции this.timeoutFunc этот создаваемый экземпляр this
	}

/*	query() {
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(() => {

				let now = this.counterFunc();
				if ( now > 0) {
					console.log(now);
					this.query();
					return;
				}
				console.log('The web server is down');

			}, 1000);
		//console.log(this.timer);
	}	*/
	

}

const dataBase = new DataBase();
console.log(dataBase);
dataBase.query(); //при вызове второй раз метода dataBase.query() this.counter уже равен 0 и как его обновить?
dataBase.query();
//console.log(dataBase.counterFunc());
//console.log(dataBase.counterFunc());
//console.log(dataBase.counterFunc());


/*function QQQ(){ //closure
	let counter = 0;
	this.some = function(){
		return counter++;
	}
}

let www = new QQQ();
console.log(www.some());
console.log(www.some());
console.log(www.some());*/


// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')