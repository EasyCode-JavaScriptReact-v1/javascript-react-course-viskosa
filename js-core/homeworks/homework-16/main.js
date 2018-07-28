/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

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

}

//console.log(solution([ [1, 'a'], [2, 'b'], [3, 'c'] ])) //=> [ [1, 2, 3], [a, b, c] ];
//console.log(solution([ [1, 3, 5], [2, 4, 6] ])) //=> [ [1, 2], [3, 4], [5, 6] ];
//console.log(solution([[]]))// => []
//console.log(solution([ [ [ ] ] ])) // = [ [] ]

//----------------------------------------------------------------------
/*
/*
<h1>Main</h1>/////
<ul>
  <h1>Catalog</h1>////
  <li>
    <ul>
      <h1>Comp</h1>////
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>

 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul -> li
 Используйте innerHTML
 */

const navigation = [
  {name: 'Главная'},
  {name: 'Каталог', //h1
   children: [ //ul
		      	{name: 'Компьютеры',//h1
		        children: [ //li -> ul 
		        		{name: 'Ноутбуки'}, //li h1
		        		{name: 'Планшеты'} //li h1
		        	]
		      	}
    		 ]
  },
  {name: 'Профиль'}
];

const visualArray = arr => {
	arr.forEach(item => { 

		for (let key in item) {

			if (key == 'name') {
				document.body.innerHTML += `<h1>${item.name}</h1>`;
			};

			if (key == 'children') {
				const map = item[key].map(child => {

					let res = '<ul>';

					for (let key1 in child) {

						if (key1 == 'name') {
							res += `<h1>${child[key1]}</h1>`;
						};

						if (key1 == 'children') {
							res += `<ul>
										<li>${child[key1][0].name}</li>
										<li>${child[key1][1].name}</li>
									<ul>`
						}

					}
					res += '</ul>';
					return res;
				})

				document.body.innerHTML += map;
			}

		};

	})
};
visualArray(navigation);

