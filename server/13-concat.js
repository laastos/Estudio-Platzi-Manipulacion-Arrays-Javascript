let exercise = 1;
if (exercise == 1) {
  const elements = [1,1,2,2];
  const otherElements = [3,3,4,4];

  const newArray = [...elements];
  for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
  }
  console.log('for', newArray);

  const rta = elements.concat(otherElements);
  console.log('concat', rta);
}