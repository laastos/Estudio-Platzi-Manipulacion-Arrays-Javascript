var totals = [1,2,3,4];

if (false) {
  let sum = 0;
  for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
  }
  console.log('original', totals);
  console.log('result', sum);
}

if (true) {
  const rta = totals.reduce((sum, item) => sum + item, 0);
  console.log('original', totals);
  console.log('result', rta);
}
