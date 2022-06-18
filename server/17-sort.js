let exercise = 4;

if (exercise == 1) {
  const months = ["March", "Jan", "Feb", "Dec"];
  console.log(months.sort());
}

if (exercise == 2) {
  const numbers = [1, 30, 4, 21, 100000];
  console.log(numbers.sort((a, b) => a - b));
}

if (exercise == 3) {
  const words = [
      "réservé",
      "premier",
      "communiqué",
      "café",
      "adieu",
      "éclair",
      "banana",
  ];
  console.log(words.sort((a, b) => a.localeCompare(b)));
}

if (exercise == 4) {
  const orders = [
      {
          customerName: "Nicolas",
          total: 600,
          delivered: true,
          deliverDate: new Date(2021, 1, 15, 10, 10),
      },
      {
          customerName: "Zulema",
          total: 120,
          delivered: true,
          deliverDate: new Date(2021, 1, 10, 9, 10),
      },
      {
          customerName: "Santiago",
          total: 1840,
          delivered: true,
          deliverDate: new Date(2021, 1, 20, 13, 10),
      },
      {
          customerName: "Valentina",
          total: 240,
          delivered: true,
          deliverDate: new Date(2021, 1, 3, 15, 10),
      },
  ];
  console.log(orders.sort((a, b) => b.deliverDate - a.deliverDate));
}
