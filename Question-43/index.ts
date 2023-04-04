interface Magician {
  name: string;
}

function show_magicians(magicians: Magician[]): void {
  for (let magician of magicians) {
    console.log(`The great magician ${magician.name}`);
  }
}

function make_great(magicians: Magician[]): Magician[] {
  const great_magicians: Magician[] = [];
  for (let magician of magicians) {
    great_magicians.push({ name: `the Great ${magician.name}` });
  }
  return great_magicians;
}

const magicians: Magician[] = [
  { name: "Ahmed Ali" },
  { name: "Sana Malik" },
  { name: "Hassan Abbas" }
];

const great_magicians: Magician[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
