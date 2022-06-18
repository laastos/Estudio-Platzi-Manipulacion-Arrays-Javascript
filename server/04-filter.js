const words = ["spray", "limit", "elite", "exuberant"];
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// Using for
if (false) {
  const rta1 = [];
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
      rta1.push(element);
    }
  }
  console.log('original', words);
  console.log('rta1', rta1);
}

// Using filter
if (false) {
  const rta = words.filter((element) => element.length >= 6);
  console.log('original', words);
  console.log('rta', rta);
}

if (true) {
  if (false) rta3 = orders.filter(item => item.delivered);
  if (false) rta3 = orders.filter(item => item.delivered && item.total >= 100);
  
  if (true) {
    const search = (query) => {
      return orders.filter(item => {
        return item.customerName.includes(query);
      })
    }
    rta3 = search('Nico');
  }
  
  console.log('original', orders);
  console.log('rta3', rta3);
}

// Includes
if (false) {
  const array1 = [1, 2, 3];
  console.log(array1.includes(2)); // true

  const pets = ['cat', 'dog', 'bat'];
  console.log(pets.includes('cat')); // true
  console.log(pets.includes('at')); // false
}