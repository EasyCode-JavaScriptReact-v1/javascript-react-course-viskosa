/* EASY---------------------------------------------------------
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены*/
function solution(arr){
	let wordsArray = arr[0].split(' ');
	let pattern = /\W/g;
	let onlyWords = [];

	let itemsLength = wordsArray.reduce((newItem, item) => {

		if (item.search(pattern) > -1){
			item = item.replace(pattern, '');
		}

		onlyWords.push(item);
		return newItem + item.length;

	}, 0);

	let averageLength = Math.floor(itemsLength / wordsArray.length);

	let result = onlyWords.filter((item) => {
		if (item.length > averageLength) {
			return item;
		}
	})

	return result;
}

console.log(solution(["This is a sample string"])) //expected ["This" "sample" "string"]
console.log(solution(["Some another sample"])) //expected ["another" "sample"]
console.log(solution(["Do, do, do, do... do it!"])) //expected []


/*
Подготовка к занятию в пятницу.-----------DONE-------------------------------------------
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 10.x.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1-------------------------------------------------------------------------------
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут

                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/
let table = document.querySelector('table');
table.addEventListener('click', makeItRed);
//let coloredTD;

function makeItRed(){
	let target = event && event.target;

	if (target.tagName == 'TD') {
		target.textContent = ' ';

		let rowsChildren = [...target.parentNode.parentNode.children];
		let clickedRow = target.parentNode;
		
		rowsChildren.forEach((row, j, rowsArr) => {
			if(clickedRow == row){

				let clickedIndexRow = j+1;

				let shouldBeColoredRow = rowsArr.length - clickedIndexRow;

					[...row.children].forEach((td, i, tdsArr) => {

						if (td.textContent == ' ') {
				
							let clickedIndex = i+1;
							let shouldBeColoredIndex = tdsArr.length - clickedIndex;
							let shouldBeColoredTD = [...rowsArr[shouldBeColoredRow].children][shouldBeColoredIndex];
									
							toPaint(shouldBeColoredTD);

							return;
						}
					})
			} // end of if

		}) // end of rowsChildren.forEach

	} // end of if

} // end of function

function toPaint(elem){ //I want to remove bg color from previous colored element, but it works in strange way
	//if (coloredTD) {
	//	coloredTD.classList.remove('painted');
	//}

	//coloredTD = elem;
	//coloredTD.classList.add('painted');
	elem.classList.add('painted');
}

// @SUPER-FrontEnd----------------------------------------------------------------
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/

class Resize {
	constructor(){
		this.parent = document.querySelector('section');
		this.parent.addEventListener('mousedown', this.handlerMouseDown.bind(this));
		this.handlerMouseMove = this.handlerMouseMove.bind(this);
		window.addEventListener('mouseup', this.handlerMouseUp.bind(this));
	}

	handlerMouseDown(e){
		this.target = e.target;
		this.startMouseX = e.clientX;
		//this.initialWidth = this.target.parentNode.offsetWidth;

		if (this.target && this.target.classList.contains('resize')) {
			window.addEventListener('mousemove', this.handlerMouseMove);
		}
	}

	handlerMouseMove(e) {
		//let startMouseX = e.clientX;
		let endMouseX = e.clientX; // собирает координаты мыши все время, пока происходит движение

		//if (endMouseX > this.startMouseX) {
			this.target.parentNode.style.cssText = `flex-basis:${endMouseX-this.startMouseX}px;`;
		//}
	}

	handlerMouseUp(){
		window.removeEventListener('mousemove', this.handlerMouseMove);
	}

}

let newResize = new Resize();
