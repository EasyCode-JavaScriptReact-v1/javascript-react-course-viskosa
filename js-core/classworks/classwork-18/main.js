/*DOM EVENTS LEVEL 1*/
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');

/*block1.addEventListener('click', function(){
	console.log('I am block1');
}, false);

block2.addEventListener('click', function(){
	console.log('I am block2');
}, false);*/

block3.addEventListener('click', clickHandler);

let counter = 0;
function clickHandler(){
	if (counter < 3) {
		console.log('I am block3');
		counter++;
		return;
	}

	block3.removeEventListener('click', clickHandler);
	console.log('eventListener was deleted');
}

//3 параметр - всплытие 
//по умолчанию стоит false
//по умолчанию ловятся события на всплытии
//но если при погружении джаваскрипту встретится событие, у которого true, 
//то сначала выполнится событие с true, потом целевое событие, потом события,
//которые на блоках выше и у которых false

/*let table = document.querySelector('table');

table.addEventListener('click', function(){

	if (!event && !event.target) {
		return;
	};

	let target = event.target;
	if (target.tagName != "TD") {
		return;
	};
	target.style.background = 'red';

});*/

//event.stopPropagation(); - остановка всплытия или погружения, т.е. если это написать 
//в ф-ции, т. выполнится только это событие и никакие более высокие не выполнятся

//event.stopImmediatePropogation() - остановит на всплытии вообще все последующие события

//preventDefault() - останавливает поведение по умолчанию, например, переход по ссылке

