"use strict";
const guestList = ["Aman", "Nouman", "Ayesha"];
console.log("Good news! We found a bigger dinner table, so we can invite more people.");
guestList.unshift("Rahat", "MANI");
guestList.push("Saba");
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people.");
while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner!`);
});
guestList.length = 0;
console.log(`Guest list: ${guestList}`);
//# sourceMappingURL=index.js.map
