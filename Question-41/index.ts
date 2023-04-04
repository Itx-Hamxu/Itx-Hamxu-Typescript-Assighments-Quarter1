function show_magicians(names: string[]): void {
  for (let name of names) {
    console.log("The great magician " + name);
  }
}

let magicians: string[] = ["Ahmed Ali", "Sana Malik", "Hassan Abbas"];
show_magicians(magicians);
