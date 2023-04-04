"use strict";
let current_users = ["Rahat", "Mahi", "Fatima", "Ayesha", "Ali"];
let new_users = ["Aman", "Rahat", "Fatima", "Zunaira", "Ayesha"];
for (let i = 0; i < new_users.length; i++) {
  let username_exists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      username_exists = true;
      break;
    }
  }
  if (username_exists) {
    console.log(`Sorry, the username ${new_users[i]} is already taken. Please choose a different username.`);
  } else {
    console.log(`Congratulations, the username ${new_users[i]} is available.`);
    current_users.push(new_users[i]);
  }
}
//# sourceMappingURL=index.js.map
