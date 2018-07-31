/*
 TASK 0----------------------------------------------------------------
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
};

//console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
//console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
//console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
//console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
//console.log(solution([12, 12, 12])); // [5, 4]

/* TASK 1--------------------------------------------------------------
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" следующее.
 *
  1.1
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * 1.2
 * Добавьте внизу цифры с текущим активным изображением.
 */
 /*создайте новый instance Carouse при вызове initialize*/  //не поняла, что это значит
/*var myInitializedCarousel = Carousel.initialize({
  elementToApply: '.carousel',
  infinity: true,
});*/


/*class Carousel {

	static initialize() {
		return new Carousel;
	}

	constructor(){
		this.clickHandler();
	}

	clickHandler() {
		let leftArrow = document.querySelector('.ec-left');
		let rightArrow = document.querySelector('.ec-right');
		let slides = [...document.querySelectorAll('li')];
		let activeNumberSpan = document.querySelector('.number');
		let activeSlide = null;

		slides.forEach((item) => {
			if (item.getAttribute('style') == 'display: block') {
				activeSlide = item;
				activeNumberSpan.innerHTML = activeSlide.firstElementChild.alt;
			}
		});

		leftArrow.onclick = () => {
			activeSlide.setAttribute('style', 'display:none');
			if (activeSlide.previousElementSibling) {
				activeSlide.previousElementSibling.setAttribute('style', 'display:block');
				activeSlide = activeSlide.previousElementSibling;
				activeNumberSpan.innerHTML = activeSlide.firstElementChild.alt;

			} else {
				slides[slides.length - 1].setAttribute('style', 'display:block');
				activeSlide = slides[slides.length - 1];
				activeNumberSpan.innerHTML = activeSlide.firstElementChild.alt;
			}
			
		}

		rightArrow.onclick = () => {
			activeSlide.setAttribute('style', 'display:none');
			if (activeSlide.nextElementSibling) {
				activeSlide.nextElementSibling.setAttribute('style', 'display:block');
				activeSlide = activeSlide.nextElementSibling;
				activeNumberSpan.innerHTML = activeSlide.firstElementChild.alt;
			} else {
				slides[0].setAttribute('style', 'display:block');
				activeSlide = slides[0];
				activeNumberSpan.innerHTML = activeSlide.firstElementChild.alt;
			}

		}

	}

}
//let myCarousel = new Carousel;
var myInitializedCarousel = Carousel.initialize();
*/


 /* @SUPER -> @front-end---------------------------------------------------
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка-------------------------------------
 *
 * */
class Carousel {

	static initialize() {
		return new Carousel;
	}

	constructor(){
		this.clickHandler();
	}

	clickHandler() {
		let leftArrow = document.querySelector('.ec-left');
		let rightArrow = document.querySelector('.ec-right');

		this.parent = document.querySelector('ul');
		this.slides = [...this.parent.children];

		this.oneChildWidth = parseInt(getComputedStyle(this.slides[0]).width);
		let parentWidth = this.oneChildWidth * this.slides.length;
		this.parent.style.width = parentWidth + 'px';

		this.activeSlide = this.parent.firstElementChild;

		let activeNumberSpan = document.querySelector('.number');
		activeNumberSpan.innerHTML = this.activeSlide.firstElementChild.alt;


		leftArrow.onclick = () => {

			if (this.activeSlide.nextElementSibling) {

				this.changeSlide(leftArrow);

			} else {

				this.parent.style.transform = `translateX(0px)`;
				this.activeSlide = this.parent.firstElementChild;
			}

			activeNumberSpan.innerHTML = this.activeSlide.firstElementChild.alt;
		}

		rightArrow.onclick = () => {

			if (this.activeSlide.previousElementSibling) {
				
				this.changeSlide(rightArrow);

			} else {

				this.parent.style.transform = `translateX(-${this.oneChildWidth*(this.slides.length-1)}px)`;
				this.activeSlide = this.parent.lastElementChild;

			}

			activeNumberSpan.innerHTML = this.activeSlide.firstElementChild.alt;
		}

	}

	changeSlide(arrow){
		if (arrow.classList.contains('ec-left')) {
			this.parent.style.transform += `translateX(-${this.oneChildWidth}px)`;
			this.activeSlide = this.activeSlide.nextElementSibling;
		} else {
			this.parent.style.transform += `translateX(${this.oneChildWidth}px)`;
			this.activeSlide = this.activeSlide.previousElementSibling;
		}

	}

}


//let myCarousel = new Carousel;
var myInitializedCarousel = Carousel.initialize(
	//{
	  //elementToApply: '.carousel',
	  //infinity: true,
	//}
);


/*
* TASK 2---------------------------------------------------------------------
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})
/*
*
* <style>.fetch {
* background-color
* */
class PutIntoHead {
	constructor(){

	}

	topStyle(selector, obj){
		let styleTag = document.querySelector('style');
		console.log(obj);
		let styles = this.createRow(obj);

		let selectorToInsert = `${selector} {
			${styles}
		}`;

		styleTag.insertAdjacentHTML('beforeEnd', selectorToInsert);
	}

	createRow(obj) {
		let result = '';
		let pattern = /[A-Z]/;
		for (let key in obj){

			if (key.match(pattern)){

				let arrOfUppercased = key.match(pattern);
				let newKey = key.replace(arrOfUppercased[0], `-${arrOfUppercased[0].toLowerCase()}`);

				result += `${newKey}: ${obj[key]}; `;

			} else {

				result += `${key}: ${obj[key]}; `;
			}

		}

		return result;
	}

}

let myClass = new PutIntoHead;
myClass.topStyle('fetch', {backgroundColor:'blue', marginTop: '20px', color: 'red'});
/* @SUPER-------------------------------------------------------------------
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * *///---------- РЕШЕНИЕ ЧЕРЕЗ МАССИВЫ-------------------------

 function makeCamelCase(str){
    str = str.toLowerCase();

    if (str.includes('-')) {        //'background-color'
        let arr = str.split('-');   //['background', 'color']

        let capitalizedArr = arr.map((item, i) => {
            if ( i > 0) {
              let itemToArray =  item.split(''); //['c', 'o', 'l', 'o', 'r']
              let firstLetter = itemToArray[0].toUpperCase();
              itemToArray.splice(0, 1, firstLetter);
              return itemToArray.join('');
            } 
            return item;
        }); // end of map

       str =  capitalizedArr.join('');
    };

    return str;
}

console.log(makeCamelCase('background-color'));
console.log(makeCamelCase('margin-left'));
console.log(makeCamelCase('flex-basis'));

//-------------РЕШЕНИЕ ЧЕРЕЗ РЕГВЫРАЖЕНИЯ не работает----------------------
/* function makeCamelCase(str){
    str = str.toLowerCase();
    let pattern = /-/;
    if (str.match(pattern)) {        //'background-color'
    	let arr = str.match(pattern);
    	console.log(arr);
    	str.
    	let newString = str.replace(arr[0], arr)

    };

    return str;
}

console.log(makeCamelCase('background-color'));
console.log(makeCamelCase('margin-left'));
console.log(makeCamelCase('flex-basis'));*/


