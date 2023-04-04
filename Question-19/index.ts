let guests: string[] = ['Rahat', 'Mani', 'Ayesha', 'Saba', 'Aman', 'Nouman'];

console.log(`Guest list: ${guests}`);
console.log("I just found out that my new dinner table won't arrive in time for the dinner, and I can only invite two people for dinner.");

while (guests.length > 2) {
  const guest = guests.pop();
  console.log(`Sorry ${guest}, I won't be able to invite you to dinner.`);
}

console.log(`Dear ${guests[0]} and ${guests[1]}, you are still invited to dinner.`);
console.log(`Number of people invited to dinner: ${guests.length}`);