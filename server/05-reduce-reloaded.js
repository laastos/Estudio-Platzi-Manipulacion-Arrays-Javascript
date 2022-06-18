if (true) {
  const data = [{
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const result = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    return obj;
  }, {});
  console.log(result);
}

/**
 * RETO
 */
if (false) {
  const numbers = [1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8, 9];
  const ranges = [
    [1, 5],
    [6, 7],
    [8, 9],
  ];

  const countInitial = ranges.map(item => 0);
  const between = (x, min, max) => x >= min && x <= max;

  const result = numbers.reduce((accum, element) => {
    ranges.forEach((item, index) => {
      if (between(element, item[0], item[1])) accum[index]++;
    });
    return accum;
  }, countInitial);

  console.log(result);
}