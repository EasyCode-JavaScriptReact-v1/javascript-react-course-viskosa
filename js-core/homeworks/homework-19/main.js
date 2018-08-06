alert('Hello from main.js!!!');
/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре*/
function solution(str){
	let pattern1 = /::/g;
	let pattern2 = /([a-z])([A-Z])/g;
	let pattern3 = /-/;

	let step_1 = str.replace(pattern1, '/');
	let step_2 = step_1.replace(pattern2, "$1_$2");
	let step_3 = step_2.replace(pattern3, '_').toLowerCase();
	//let step_4 = step_3.replace(/[A-Z]/, )
	return step_3;
}

console.log(solution("ActiveModel::Errors")) //=> active_model/errors"
console.log(solution("HelloHowAreYou")) //=> "hello_how_are_you"
console.log(solution("MyNAMEIsBOND-JamesBond"))//=> my_name_is_bond_james_bond"
console.log(solution("MAINCompany::BEST-MAINUser"))//=> "main_company/best_main_user"

//---------------РЕШЕНИЕ В ФАЙЛЕ SERVER.JS-----------------------------------
/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла*/


//---------------РЕШЕНИЕ В ВЕТКЕ phoneApp-----------------------------------------
/* TASK 1
По приложению phone-book;
1. Для каждой страницы у вас должен быть класс с одноименным названием
в отдельном файле
2. Каждый класс должен содержать методы render() - который рендерит всю страницу
3. Удалить jquery.js и bootstrap.js с проекта
-> Закончить keypad с прошлого занятия, добавить функционал для удаления номера
Сортировка таблицы!
Визуализировать страницы Edit contact, User, Add User;

TASK 2
1. keypad - сделать чтобы номер можно было набрать с клавиатуры (!)
2. Формат номера должен быть таким (099)-17-38-170
*/

/*
TASK 3
edit-contact,
- сделать данные редактируемыми (атрибут contentEditable) // input
- изменять backgroundColor
add-user при клике:
index.html/contacts.html - в поле search при вводе буквы,
добавить поиск по имени если имя включает хотя бы одну эту букву.
после ввода каждого символа, фильтровать отображаемых пользователей.
При удалении всех символов отобразить снова весь список
*/