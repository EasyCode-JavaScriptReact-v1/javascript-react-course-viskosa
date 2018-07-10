//ПОЛИМОРФИЗМ-----------------------------------------------

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

//-------------------------------------------------------

function Country (countryName){
	this.countryName = countryName;
}

Country.prototype.showCity = function(){
	console.log(this.countryName);
}

const ukraine = new Country('ukraine');

ukraine.prototype = Object.create(Country.prototype);

ukraine.prototype.showCity = function(){
	console.log('переопределили');
}

//------------------------------------------------------------

class CountryClass {  //ф-ция конструктор
	constructor(countryName){
		this.countryName = countryName;
		let secretPlase = 'Island';
		this.showSecretPlase = () => secretPlase;
	}

	showCity() {  //метод
	console.log(this.countryName);
	}

}

const siria = new Country('siria');

//---------------------------------------------------------------

class CityClass extends CountryClass { //наследование
	constructor(options){
		super(options.name);
		this.cityName = options.age;
	}

	showTree(){
		console.log('qqqqqqqqqqqqqqqqqqq');
	}

}

let city = new CityClass ({name: 'kharkiv', age: 18});
console.log(city);

//----------------------------------------------------------------
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


//--------SETTIMEOUT-------------------------
const add = (a, b) => console.log(a + b);

add(1, 2);

setTimeout(() => {
	add(100, 200);
}, 1000);


add(1000, 2000);

///-----------------------------------------
let func = function(name){
	console.log(name);
} 

setTimeout(() => {
	func('Nataly 1');
	//console.log('Nataly 1');
}, 3000);

setTimeout(() => {
	func('Nataly 2');
	//console.log('Nataly 2');
}, 2000);

setTimeout(() => {
	func('Nataly 3');
	//console.log('Nataly 3');
}, 1000);

/*let myName = setTimeout((name) => {
	console.log(name);
}, 1000)

myName('Nataliia');*/

let int = setInterval(()=>{
	func('interval');
}, 500);

setTimeout(()=>{
	clearInterval(int);
}, 2000)

//давайте счетчик +1 в консоли

let i = 0;
setInterval(()=>{
	console.log(1);
}, 1000)
