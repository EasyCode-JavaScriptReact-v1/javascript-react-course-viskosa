(function(){
	const initialState = ['learn js', 'learn mvc', 'read book OOP'];
	const model = new Model(initialState);
	const view = new View(initialState);//запрос на сервер
	const controller = new Controller(model, view)
})()

