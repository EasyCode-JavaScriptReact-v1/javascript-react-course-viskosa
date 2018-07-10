//'use strict';

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string

 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
/*let ctx = ctx: Object {
    req: Object
      PORT: number
      url: string

    res: Object
      status: number,
      message: string,
      header: Object {
        content-type:application/json
        }
    }*/


/*конструктор*/

function Http() { 
	this.ctx = {
		req: {
			port: 8880,
			url: 'localhost',
		},
		res: {
			status: 200,
			message: 'OK',
			header: {
				content_type: 'application/json',
			}
		}
	}

	this.next = function(){
		console.log('function was called');
	}
}

/*прототипы*/
Http.prototype.createServer = function(fn) {

	this.function = function(){
		return fn(this.ctx, this.next());
	}
	//console.log(this);
	return this;
}

Http.prototype.listen = function(port, host) {
	console.log(`Server running on https:${host}:${port}`);
	this.function();
	//console.log(this);
	return this;
}

/*новый экземпляр*/
const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost'); //переданная ф-ция вызывается, когда вызываешь листен

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
function Human(options){
	let {name, age, sex, height, weight} = options;

	this.name = name;
	this. age = age;
	this.sex = sex;
	this.height = height;
	this.weight = weight;
}

//--------------worker-----------------------

function Worker(options){	//сюда пришел объект переданных свойств
	let {job, salary, ...humanProps} = options;

	Human.call(this, humanProps);//call, а не apply потому что humanProps - это объект, а не массив

	this.job = job;
	this.salary = salary;
}

Worker.prototype = Object.create(Human.prototype);

Worker.prototype.working = function(){
	console.log(this.name + ' can work');
}

//--------------student-----------------------

function Student(options){
	let {univer, scolarship, ...rest} = options;

	Human.call(this, rest);

	this.univer = univer;
	this.scolarship = scolarship;
}

Student.prototype = Object.create(Human.prototype);

Student.prototype.toSeeMovies = function(){
	console.log(this.name + ' can see movies');
}

let workerAndrew = new Worker({name:'Andrew', age:23, sex:'male', height:186, weight:80, job: 'pilot', salary: 10000});
console.log(workerAndrew);
workerAndrew.working();


let studentAlla = new Student({sex:'female', height:160, name:'Alla', age:19, weight:55, univer: 'KIMO', scolarship: false});
console.log(studentAlla);
studentAlla.toSeeMovies();

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/