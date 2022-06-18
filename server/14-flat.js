let exercise = 1;
if (exercise == 1) {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6, [1, 2]],
    [7, 8, 9]
  ];
  function flatWhile(matrix, depth) {
    let tempArray = matrix;
    let newArray;
    let flatted;

    while (depth > 0) {
      flatted = true;
      newArray = [];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].length > 1) {
          for (let j = 0; j < tempArray[i].length; j++) {
            newArray.push(tempArray[i][j]);
          }
          flatted = false;
        } else {
          newArray.push(tempArray[i]);
        }
      }
      tempArray = newArray;
      if (flatted) {
        depth = 0;
      } else {
        depth--;
      }
    }
    return tempArray;
  }
  rta = flatWhile(matrix, 100000);
  console.log('original', matrix);
  console.log('flatten while', rta);
}
