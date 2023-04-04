"use strict";
function show_magicians(names) {
  for (let name of names) {
    console.log(`The great magician ${name}`);
  }
}
function make_great(names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = `the Great ${names[i]}`;
  }
}
const magicians = ["Ahmed Ali", "Sana Malik", "Hassan Abbas"];
make_great(magicians);
show_magicians(magicians);
//# sourceMappingURL=index.js.map
