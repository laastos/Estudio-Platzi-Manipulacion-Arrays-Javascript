let exercise = 2;
if (exercise == 1) {
  const elements = ['Fire', 'Air', 'Water'];
  let rta1 = '';
  const separator = '--';
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta1 = rta1 + element;
    if (index < (elements.length - 1)) {
      rta1 += separator;
    }
  }
  console.log('for', rta1);

  let rta2 = elements.join('--');
  console.log('join', rta2)
}

if (exercise == 2) {
  const title = 'Curso de manipulación de arrays';
  let rta1 = title.toLowerCase().split(' ').join('-');
  console.log(rta1);
}