 /*1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

console.log(numbers);
let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`;
console.log('task1', task1);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."
  // index +++
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = `${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}. ${array[0]} ${array[8]} ${array[1]} ${array[5]}`;
console.log('task2', homeSentence);


/* 3. Добавьте свойста 4 новых свойства в объект используя
    квадратные скобки и точку. */

let myObj = {};
let eyeColor = 'green';
myObj.sex = 'male';
myObj.age = 30;
myObj['hasDog'] = true;
myObj['eyesColor'] = 'green';

console.log('task3', myObj);


/* 5. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид */

let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'];
let x =
  'google \
released ' +
  'new version\
 ' +
  frameworks[1] +
  Math.floor(frameworks[0]) +
  '\
But real speed is ' +
  `${frameworks[frameworks.length - 1]}`;

//console.log(x);

let helper1 = Math.floor(frameworks[0]);
let helper2 = frameworks[frameworks.length - 1];

//console.log(helper1, helper2);

let y = `google released new version ${frameworks[1]} ${helper1} But real speed is ${helper2}`;
console.log('task5', y);