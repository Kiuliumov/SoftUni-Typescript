enum Day {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function printDay(num: number): void {
  const day = Day[num];

  if (day) {
    console.log(day);
  } else {
    console.log("error");
  }
}

printDay(1); // Monday
printDay(5); // Friday
printDay(8); // error