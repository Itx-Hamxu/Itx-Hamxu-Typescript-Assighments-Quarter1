const guestList = ["Aman", "Nouman", "Ayesha"];

console.log("Good news! We found a bigger dinner table, so we can invite more people.");

guestList.unshift("Rahat", "MANI"); // Add two new guests to the beginning of the array
guestList.push("Saba"); // Append a new guest to the end of the array

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner!`);
});

guestList.length = 0; // Remove all elements from the array

console.log(`Guest list: ${guestList}`); // should print "Guest list: []"
