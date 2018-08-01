/* EASY---------------------------------------------------------
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

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

function makeItRed(){
	let target = event && event.target;

	if (target.tagName == 'TD') {
		target.textContent = ' ';

		//this.coloredTD = null;

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
							
							//if (this.coloredTD) {
							//	console.log(1);
							//	this.coloredTD.removeAttribute('style');

							//};

							[...rowsArr[shouldBeColoredRow].children][shouldBeColoredIndex].style.backgroundColor = 'red';

							//this.coloredTD = [...rowsArr[shouldBeColoredRow].children][shouldBeColoredIndex];

							return;
						}
					})

			} // end of if

		}) // end of rowsChildren.forEach

	} // end of if

} // end of function

// @SUPER-FrontEnd----------------------------------------------------------------
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/