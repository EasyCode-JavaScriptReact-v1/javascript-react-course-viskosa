const cafe = {
  name: 'Мир средиземья',
  fruits: ['apple', 'orange', 'dfgghs'],

  showFruits() {  //метод, который показывает фрукты
    console.log(this.fruits);
  },

  partners: [
  {
    name: 'Frodo',
    fruits: ['хлебцы', 'капуста']
  },
  {
    name: 'Боромир',
    fruits: ['яблоки', 'киви']
  },
    {
    name: 'Гендальф',
    fruits: ['манго', 'банан']
  }
  ],

  showPartnersFruits() {
    let method = this.showFruits; //нужно в эту функцию получить метод showFruits, с которого можно позвонить 
                                  //звонить может только функция. Получаем сюда метод showFruits
    console.log(this);
  
    this.partners.forEach((item) => { //и для каждого объекта-партнера вызываем метод showFruits
      method.call(item); // возьми method и позвони с него в текущий объект, т.е. в item
      //Это значит вызови метод method, он же this.showFruits, для каждого объекта
      //this.showFruits.call(item);// можно и так написать, без получения переменной method
    })

  }

}

//добавьте метод, который будет в консоли отображать фрукты

cafe.showFruits();
cafe.showPartnersFruits();//Отобразите фрукты партнеров Мира, используя метод showFruits
// внутри showPartnersFruits

//-------------------------------------------------------------------
const teacher = {
  teacherName: 'Alla I'
}

const halava = function(){
  console.log('Халява, приди!');
}

function createStudent(str, fn){
  const student = {};

  student.name = str;
  student.someMagic = fn;

  return student;
}

const students = [];
for (let i = 0; i < 30; i++) {
  const newStudent = createStudent(`student ${i + 1}`, halava);//создаем объект студент и каждому из них ставим разное имя student 1, 2,3...
  students.push(newStudent); 
}

students.forEach((item) => {
  item.__proto__ = teacher;
})

teacher.teacherName = 'Boris P';

console.log(students);
console.log(students[0].teacherName);


