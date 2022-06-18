const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
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

// Take a property
if (false) {
  const rta = orders.map(item => item.total);
  console.log('original', orders);
  console.log('rta', rta);
}

// Add a property transforming original array
if (true) {
  const rta2 = orders.map(item => {
    item.tax = 0.19;
    return item;
  });
  console.log('original', orders);
  console.log('rta2', rta2);
}

// Add a property without transform original array
if (false) {
  const rta3 = orders.map((item) => {
    return {
      ...item,
      tax: item.total * 0.19, 
    }
  });
  console.log('original', orders);
  console.log('rta3', rta3);
}