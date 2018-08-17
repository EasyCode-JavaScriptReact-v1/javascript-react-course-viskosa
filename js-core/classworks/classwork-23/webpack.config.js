const path = require('path');//такой пакет, получает абсолютный путь 
console.log('Privet');
console.log(path.resolve('./dist/bundle.js'));
console.log('Poka');

module.exports = {
	entry: './app/main.js',	//точка входа
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js',
		//publicPath: '/'
	},
	mode: 'development',
	watch: true,
	//devServer: {
	//	contentBase: path.resolve('./app'),
	//	hot: true,
	//	port: 8080
	//}
}