const fs = require('fs');

fs.readdir('./', (err, data) => {
	console.log(data);
})
//прочитай директорию './' и верни данные data в коллбеке 
//вернет все, что есть в директории, в которой он сам находится, в виде массива:
//[ 'filesystem.js',
//  'helloUser.js',
//  'img',
//  'index.html',
//  'main.js',
//  'math.js',
//  'node.js',
//  'server.js' ]


//fs.readFile() - метод позволяющий читать файлы с диска
//fs.createReadStream() - создать поток чтения файла

const src = fs.readdirSync('./img'); //прочитать содержимое img синхронно, бликирующая операция
console.log(src); //[ '1.jpg' ]

const file = fs.readFileSync('./index.html');
console.log(file);//<Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 3e 0d
//0a 3c 68 65 61 64 3e 0d 0a 09 3c 6d 65 74 61 20 63 68 61 72 73 65 74 3d 22 75 ..
//. >
const file2 = fs.readFileSync('./index.html').toString();
console.log(file2);//будет нормальное содежржимое файла