const guestList = ["Rahat", "Mani", "Ayesha"];

console.log("Good news! We found a bigger dinner table, so we can invite more people.");

guestList.unshift("Saba", "Aman"); // Add two new guests to the beginning of the array
guestList.push("Nouman"); // Append a new guest to the end of the array

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are mesmerizingly invited to dinner!`);
}
