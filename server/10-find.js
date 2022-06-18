{
  let rta1 = undefined;
  const numbers = [1,30,49,29,10,13];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
      rta1 = element;
      break;
    }
  }
  console.log('for', rta1);

  const rta2 = numbers.find(item => item === 30);
  console.log('find', rta2);
}

{
  const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  const rta3 = products.find(item => item.id === '🥞');
  console.log('find', rta3);
}