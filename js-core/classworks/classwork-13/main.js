//---- РАЗБОР ДЗ -----------------------------------

// @SUPER
/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
*/

const adding = (a, b) => a + b;

const wrapperFunc = (fn) => {
	return (...args) => {  //из пришедших ыргументов сделает массив
		console.log(args);
		return fn(...args);
		//fn.apply(null, args);
	}
}

const result = wrapperFunc(adding);
console.log(result(10, 20)); //30


/*можно вот так упростить:*/
const wrapperFunc2 = fn => (...args) => {  //из пришедших ыргументов сделает массив
		console.log(args);
		return fn(...args);
	}

const result2 = wrapperFunc(adding);
console.log(result2(30, 40)); //30



//ПОЛИМОРФИЗМ-----------------------------------------------
//Полиморфизм - переопределение в дочернем классе метода родительского класса.
//Этот переопределенный метод работает только для дочернего класса, в классе-конструкторе остается старый
//добавьте всем массивам метод sum, который суммирует все аргументы в массиве

const arr = [1,2,3];
const arr2 = [10,20,30,40];

Array.prototype.sum = function(){
	let res = this.reduce((newItem, item) => {
		return newItem += item;
	}, 0)
	return res;
}

console.log(Array.prototype);

console.log(arr.sum())//6
console.log(arr2.sum())//100

//------ КЛАССЫ -----------------------------------------------
//----- так мы писали раньше на прототипах: -------------------

function Country (countryName){			//это ф-ция конструктор
	this.countryName = countryName;
}

Country.prototype.showCity = function(){	// это ее метод, записанный в прототип
	console.log(this.countryName);
	console.log('это вызвался оригинальный метод конструктора, метод называется showCity');
}

	function City(city){ 		// еще один конструктор, который будет наследоваться от Country
		Country.apply(this, city); //наследуемся от Country
		this.cityName = city;
	}

	City.prototype = Object.create(Country.prototype); //наследуемся от Country
	City.prototype.showCity = function(){				// это ПОЛИМОРФИЗМ - переопределили поведение метода showCity, 
		console.log('это вызвался переопределенный метод showCity из дочернего класса'); // взятого из конструктора
		//теперь все, кто будет наследоваться от City, получат метод showCity такой, как в City, а не как в Country
	}
	//----
	const ukraine = new Country('ukraine'); //строим новый экземпляр ф-ции конструктора
	console.log('ukraine with constructor-->', ukraine);

	//ukraine.prototype = Object.create(Country.prototype);

	//ukraine.prototype.showCity = function(){
	//	console.log('переопределили');
	//}

//------ теперь так это выглядит на классах ---------------------

class CountryClass {  //ф-ция конструктор
	constructor(countryName){ 			//в constructor приходят аргументы, как раньше они приходили в ф-цию конструктор
		this.countryName = countryName;
		let secretPlaсe = 'Island';				  //приватное свойство, пишем прямо в конструктор
		this.showSecretPlaсe = () => secretPlaсe; //приватный метод, пишем прямо в конструктор
	}

	showCity() {  //метод, пишется прям в классе
		console.log(this.countryName);
	}

	showSomethingElse() {  //метод, пишется прям в классе
		console.log('showSomethingElse');
	}

}
//CountryClass.prototype.someMethod = function(){}// в принципе и так можно добавлять методы в класс, но так никто не делает

const ukraine2 = new CountryClass('ukraine2'); //строим новый экземпляр класса - все так же точно
//он унаследует метод showCity через прототипы, т.е. будет лежать в prototype этого экземпляра класса, 
//все так же, как и с ф-цией конструктором
console.log('ukraine2 with class-->', ukraine2);

//---------- наследование на классах -----------------------------

class CityClass extends CountryClass { //это все равно, как раньше мы писали City.prototype = Object.create(Country.prototype)
	constructor(options){ // сюда придет kharkiv
		super('yo-ho-ho'); //то, что передаем в супер, попадает в родительский класс и там приходит в constructor
							// и родительский класс вызывается с переданными отсюда параметрами
		//this.cityName = city; // сюда придет kharkiv
	}

	showCityName(){
		console.log(this.cityName);
		//super.showCity(); прям отсюда можно вызвать метод родительского класса
	}

	//showCity() {  // полиморфизм - так перезапишем метод родительского класса
	//	console.log('перезаписываем стандартный метод класса showCity');
	//}

}

const kharkiv = new CityClass('kharkiv');

//let city = new CityClass ({name: 'kharkiv', age: 18});
//console.log(city);


//------ ДЕСТРУКТУРИЗАЦИЯ -------------------------------------


let showObj = obj => {
	console.log(obj.name);
	console.log(obj.surname);
}

showObj({name: 'Ivan', surname: 'Ivanov'})//Ivan Ivanov

/*можем упростить:----------------------------*/
let showObj2 = obj => {
	let {name, surname} = obj;

	console.log(name);
	console.log(surname);
}

showObj2({name: 'Ivan', surname: 'Ivanov'})//Ivan Ivanov

/*и еще лучше----------------------------------*/

let showObj3 = ({name, surname}) => {
	console.log(name);
	console.log(surname);
}

showObj3({name: 'Ivan', surname: 'Ivanov'})//Ivan Ivanov

/* и наконец ...rest  ---------------------------*/

let showObj4 = ({name, ...rest}) => { //возьми из пришедшего объекта только name, а остальные свойства собери в объект
	console.log(name); //тут только name из пришедшего объекта - Ivan
	console.log(rest); //а тут {name: 'Ivan', surname: 'Ivanov'}
}

showObj4({name: 'Ivan', surname: 'Ivanov', age: 25})

//--------ЗАДАЧКИ--------------------------------------------------------
/*
Сделайте класс анимал с 4 лапами
Добавтьте метод roar
добавтье класс-животное, которе есть у соседа

пускай животное наследуется с анимал
узнайте, сколько у него ног и как его зовут
добавьте метод кен ду самсинг
*/
class Animal {
	constructor(animal){
		this.animal = animal;
		this.legs = 4;
	}

	roar(){
		return this.animal + ` can rrrrrrrrr`;
	}
}

let myAnimal = new Animal('tiger');
console.log(myAnimal.roar());

/*пускай животное наследуется с анимал
узнайте, сколько у него ног и как его зовут*/

class Cat extends Animal {
	constructor(options){
		super(options.type);
		this.name = options.name;
		this.legs = options.legs;
	}

	canDo(){
		console.log(this.name + ` can jump`);
	}
}

let myCat = new Cat({type: 'cat', name:'Kuzma', legs:5});
console.log(myCat);
myCat.canDo();
console.log(myCat.roar());


//--------SETTIMEOUT----------------------------------------
/*Сначала строки без сеттаймаута попадают в основную очередь
строки с сеттаймаутом попадают в отдельную очередь
когда очищается основная очередь, из отдельной в основную попадают сеттаймауты
и из сеттаймаутов выполнятся сначала те, у которых меньше задержка, 
даже если они были написаны позже по коду*/


const add = (a, b) => console.log(a + b);

add(1, 2);  		//это покажется в консоли первым

setTimeout(() => { 	//это покажется в консоли четвертым
	add(100, 200);
}, 1000);

setTimeout(() => { 	//это покажется в консоли пятым
	add(10000, 20000);
}, 1000);

setTimeout(() => { 	//это покажется в консоли третьим
	add(5, 6);
}, 500);

add(1000, 2000); 	//это покажется в консоли вторым

//----------------------------------------------------------
let func = function(name){
	console.log(name);
} 

setTimeout(() => { 	//ЭТОТ ПОКАЖЕТСЯ В КОНСОЛИ ТРЕТЬИМ
	func('Nataly 1');
	//console.log('Nataly 1');
}, 3000);

setTimeout(() => { 	//ЭТОТ ПОКАЖЕТСЯ В КОНСОЛИ ВТОРЫМ
	func('Nataly 2');
	//console.log('Nataly 2');
}, 2000);

setTimeout(() => {	//ЭТОТ ПОКАЖЕТСЯ В КОНСОЛИ ПЕРВЫЙ
	func('Nataly 3');
	//console.log('Nataly 3');
}, 1000);

//---------SETINTERVAL & CLEARINTERVAL-----------------------

let int = setInterval(()=>{
	func('interval');
}, 500);

setTimeout(()=>{
	clearInterval(int);
}, 2000)

//давайте счетчик +1 в консоли

/*let i = 0;
setInterval(()=>{
	console.log(1);
}, 1000)*/

