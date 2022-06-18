let exercise = 3;
if (exercise == 1) {
  const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];
  const rta1 = users.map(user => user.attributes).flat();
  console.log('map flat', rta1);
  const rta2 = users.flatMap(user => user.attributes);
  console.log('flatMap', rta2);
}

if (exercise == 2) {
  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  function startDates(calendars) {
    const dates = [];
    Object.entries(calendars).map(
      calendar => {
        calendar[1].map(
          appoinment => {
            dates.push(appoinment.startDate);
          });
      }
    );
    return dates;
  }
  startDates(calendars);

  const rta3 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
  console.log(rta3);
}

if (exercise == 3) {
  function solution(lines) {
    return lines.flatMap(item => item.split(' ').length).reduce((sum, item) => sum += item, 0);
  }
  const rta = solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]);
  console.log(rta);

}