if (false) {
  const numbers = [1, 2, 3, 4];

  let msTime = (new Date()).getMilliseconds();
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
      rta1 = true;
      break;
    }
  }
  msTime = (new Date()).getMilliseconds() - msTime;
  console.log(`With for ${rta1} in ${msTime} milliseconds`);

  msTime = (new Date()).getMilliseconds();
  const rta2 = numbers.some( item => item % 2 === 0);
  msTime = (new Date()).getMilliseconds() - msTime;
  console.log(`With some ${rta2} in ${msTime} milliseconds`);
}

if (true) {
  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppoinment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9),
  }

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
    return dates.some(date => {
      return areIntervalsOverlapping(
        {start: date.startDate, end: date.endDate},
        {start: newDate.startDate, end: newDate.endDate},
      )
    })
  }

  console.log(isOverlap(newAppoinment));
}