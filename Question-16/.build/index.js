"use strict";
const guestList = ["Rahat", "Mani", "Ayesha"];
console.log("Good news! We found a bigger dinner table, so we can invite more people.");
guestList.unshift("Saba", "Aman");
guestList.push("Nouman");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are mesmerizingly invited to dinner!`);
}
//# sourceMappingURL=index.js.map
