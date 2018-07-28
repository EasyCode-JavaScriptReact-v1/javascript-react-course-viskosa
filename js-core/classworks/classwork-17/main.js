/* -----------------------PREVIOUS HOMEWORK--------------------------

 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */
solution = arr => {
// каким-то образом понять, сколько должно быть на выходе
	return arr[0].map((_, index) => { // это чтобы понять, сколько должно быть массивов на выходе
		return arr.map((value) => { //value - это в первом случае [1, 3, 5]. Этот ретерн сработает 3 раза, т.е. вернет 3 массива
			return value[index];// верни из [1, 3, 5] первое значение, потом второе, потом третье -
								// в зависимости от итерации по маленькому массиву
		})
	})

}
/*Мое решение - так себе
solution = arr => {
	let counter = 0;
	let resultArray = [];

	while (counter != arr[0].length) {

		let smallArray = arr.map(item => { // [1, 'a']
			return item[counter];
		})

		resultArray.push(smallArray);
		counter++;
	}

	return resultArray;

}*/
//console.log(solution([ [1, 3, 5], [2, 4, 6] ])) //=> [ [1, 2], [3, 4], [5, 6] ];
//console.log(solution([ [1, 'a'], [2, 'b'], [3, 'c'] ])) //=> [ [1, 2, 3], [a, b, c] ];
//console.log(solution([[]]))// => []
//console.log(solution([ [ [ ] ] ])) // = [ [] ]



//--------------CLASSWORK 17---------------------------
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
//элемент.className - вернет список классов элемента в виде строки
console.log(next.classList) //выводит весь список классов в виде псевдомассива
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
offsetParent - Свойство offsetParent содержит первый родительский элемент у которого CSS свойство position не равно static, либо body если его нет. 
				То есть родителя относительно которого происходит позиционирование элемента. */

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

//element.scrollTop - позиция скролла относительно блока элемента (px) считывает или устанавлиет 
					//	количество пикселей, прокрученных от верха элемента. scrollTop измеряет 
					//	дистанцию от верха элемента до верхней точки видимого контента. Когда контент 
					//	элемента не создаёт вертикальную прокрутку, его scrollTop равно 0.
//element.scrollLeft - позиция скролла относительно горизонтального элемента (px)

//element.scrollIntoView() - скролл к элементу
//elem.scrollIntoView(true) - Прилепит элемент elem, на котором вызывается метод, к верху страницы
//elem.scrollIntoView(false) - Прилепит элемент elem, на котором вызывается метод, к низу страницы

//window.pageYOffset - скролл Y относительно окна window. хранит текущую прокрутку страницы в px, не работает в IE
//window.pageXoffset - скролл X относительно окна window. хранит текущую прокрутку страницы в px, не работает в IE

//document.documentElement.scrollTop - то же самое для IE и FF
//document.body.scrollTop - то же самое, работает в хроме, в файрфоксе не работает
