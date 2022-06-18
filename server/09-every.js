if (false) {
  const numbers = [1,30,49,29,10,13];
  let rta1 = true;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 40) {
      rta1 = false;
    }
  }
  console.log("Al menos 1 número es", rta1 ? "menor" : "mayor", "a 40");

  const rta2 = numbers.every(item => item <= 40);
  console.log("Al menos 1 número es", rta2 ? "menor" : "mayor", "a 40");

}

if (true) {
  const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  const rta = team.every(item => item.age <= 15);
  console.log("El equipo debe ser de menores: ", rta ? "Equipo admisible" : "Equipo inadmisible");
}