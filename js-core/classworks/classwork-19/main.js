alert('hello');

let box = document.querySelector('.box');

box.addEventListener('mousedown', (event)=> {
	console.log('mousedown');
	box.style.backgroundColor = 'red';

	const mousemove = (event) => {
		const centerX = box.offsetWidth/2;
		const centerY = box.offsetHeight/2;
		box.style.left = event.pageX - centerX + 'px';
		box.style.top = event.pageY - centerY + 'px';
	}

	const mouseup = (event) => {
		box.style.backgroundColor = 'blue';
		box.removeEventListener('mousemove', mousemove);
		box.removeEventListener('mouseup', mouseup);		
	}

	box.addEventListener('mousemove', mousemove);
	box.addEventListener('mouseup', mouseup);
	box.ondragstart = () => false;
	console.log(event);

})

//если обработчики событий не удалять, это приводит к утечкам памяти, 
//потому что они вешаются снова и снова, но не удаляются


