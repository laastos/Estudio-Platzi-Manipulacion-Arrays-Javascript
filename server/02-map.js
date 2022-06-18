const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++');
/*const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + '++');
}*/
console.log('original', letters);
console.log('new', newArray);

function solution01(array) {
  return array.map(item => item.name);
}

console.log(solution01([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  }
]));

function solution02(array) {
	return array.map(item => {
    return {
      ...item,
      'taxes': Math.trunc(item.price * 0.19),
    }
  });
};

console.log(solution02([
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
]));

