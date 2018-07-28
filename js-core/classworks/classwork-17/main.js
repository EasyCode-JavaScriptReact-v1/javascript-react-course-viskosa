//------createDocumentFragment--------------------------
//Создает “виртуальный документ”,  в которым можно генерировать разметку и работать с элементами. 
//При вставке в документ document fragment исчезает, остается только разметка. 
//Удобно при создание виртуальной разметки….
//css нету 

let myDocument = document.createDocumentFragment();
const div = document.createElement('div');
div.textContent = 'qwerty';

myDocument.appendChild(div);
document.body.appendChild(myDocument);

//-------documentWrite-----------------------------------
//напишется прям в том месте дома, где встретился по коду

//document.write('<h1>qwert</h1>')

let myNext = document.getElementById('next');
console.log(myNext);
//сделать по клику, чтобы менялся цвет зеленый-желтый-красный-------
//green
//yellow
//red

/*myNext.onclick = function(){
	const {style} = next;

	if (style.backgroundColor === 'green') {
		style.backgroundColor = 'yellow';

	} else if (style.backgroundColor === 'yellow'){
		style.backgroundColor = 'red';
	} else {
		style.backgroundColor = 'green';
	}

}*/

//сделать, чтобы цвет менялся каждую секунду------------------

/*let arr = ['green', 'yellow', 'red'];

let counter = 0;

setInterval(()=>{
	next.style.backgroundColor = arr[counter];
	counter++;
	if(counter === arr.length) {
		counter = 0;
	}
}, 1000)*/

//увеличивайте ширину next на 10 px каждую 1 сек----------------
let arr = ['green', 'yellow', 'red'];

let counter = 0;
//let widthCounter = 10

/*setInterval(()=>{
	next.style.backgroundColor = arr[counter];
	const newWidth = parseInt(next.style.width) + 10;

	next.style.width = newWidth + 'px';
	//next.style.left = newWidth + 'px';

	console.log(next.style.width);
	counter++;
	if(counter === arr.length) {
		counter = 0;
	}
}, 100)*/

//-----------------------------КЛАССЫ----------------------
console.log(next.classList) //выводит весь список классов
//element.classList.contains()//содержит
//element.classList.add()//добавить
//element.classList.remove()//удалить
//element.classList.toggle()//переключить

//через 1 сек делать квадрат то кругом, то квадратом
setInterval(()=>{
	next.style.backgroundColor = arr[counter];
	//const newWidth = parseInt(next.style.width) + 10;
	//next.style.width = newWidth + 'px';

	next.classList.toggle('active');
	counter++;
	if(counter === arr.length) {
		counter = 0;
	}
}, 500);

//---------------------------------------
/*element.clientTop ~ css border, высота бордера верхнего
element.clientLeft ~ css border, ширина левого бордера
element.clientWidth ~ css width + padding - (scroll-bar)
element.clientHeight ~ css height + padding//без единиц измерения, только цифры

offsetHeight ~ css height + border + padding, То же, что и clientHeight, но возвращает ширину/высоту элемента с учетом и паддинга, и бордера 
offsetWidth ~ css width + border + padding
offsetTop - положение сверху относительно offsetParent элемента
offsetLeft - положение слева относительно offsetParent элемента
offsetParent - расстояние текущего элемента по отношению к верхней части offsetParent узла. */

setInterval(()=>{
	next.style.backgroundColor = arr[counter];
	//const newWidth = parseInt(next.style.width) + 10;
	//next.style.width = newWidth + 'px';

	next.classList.toggle('active');
	counter++;
	if(counter === arr.length) {
		counter = 0;
	}
}, 500);

//scro

