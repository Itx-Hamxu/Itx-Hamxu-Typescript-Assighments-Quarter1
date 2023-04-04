"use strict";
function show_magicians(magicians2) {
  for (let magician of magicians2) {
    console.log(`The great magician ${magician.name}`);
  }
}
function make_great(magicians2) {
  const great_magicians2 = [];
  for (let magician of magicians2) {
    great_magicians2.push({ name: `the Great ${magician.name}` });
  }
  return great_magicians2;
}
const magicians = [
  { name: "Ahmed Ali" },
  { name: "Sana Malik" },
  { name: "Hassan Abbas" }
];
const great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
//# sourceMappingURL=index.js.map
