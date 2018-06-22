function checkActionType(action){
  switch (action.type) {

    case 'INITIALIZE': 
      return  {initialized: true};

    case 'INCREMENT':
      return {salary: '+500$'};

    case 'DECREMENT':
      return {salary: '-500$'};

    default:
      return {};
  };
}
console.log(checkActionType({type: 'INITIALIZE'}));
    
const pseudoArray = {
  0: 'one',
  1: 'two',
  2: 'three'
}

/*function add(){
  let arr = [...arguments];

  let sum = arr.reduce((newItem, item) => {
    return newItem + item;
  }, 0)
  return sum;
}*/
//-------------second solution---------------
function add(){
  let arr = arguments;

  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    let item = arr[i];
    sum += item;
  }

  return sum;
}

console.log(add(1,2,3));
console.log(add(10,20,30));
console.log(add(10,20));
console.log(add(10,20,30, 40, 50,10));

//---------------

const user = {
  id: 10,
  country: 'Thailand',
  email: 'example@example.com',
  cars: {
    id: 50,
    name: ['bmw', 'VAZ', 'mercedes', 'AUDI'],
    vendors: {
      addresses: ['google', 'yahoo']
    }
  }
};
//написать ф-цию, которая принимает любой объект и возвращает его копию
//нужно скопировать объект
function copy(obj){
  let keys = Object.keys(obj);
  let newObj = {};

  keys.forEach((item) => {
    newObj[item] = obj[item];
  });

  return newObj;
}

const newUser = copy(user);
newUser.country = 'India';
newUser.cars.name.push('toyota');

console.log(copy(user));//thailand
console.log(copy(newUser));//india

//----------------------------

function copy(obj){
  let newObj = Object.assign({}, obj);
  return {
    ...obj,
    cars: {
        ...obj.cars,
        name: [...obj.cars.name],
        vendors: {
          ...obj.cars.vendors,
        addresses: [...obj.cars.vendors.addresses]
      }
    }

  }
}