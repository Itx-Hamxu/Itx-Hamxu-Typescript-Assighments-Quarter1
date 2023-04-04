// Define an interface for the guest
interface Guest {
  name: string;
  message: string;
}

// Create an array of guests
const guests: Guest[] = [
  {
    name: "Rahat",
    message: "Dear Rahat, it would be an honor to have you as a guest at our dinner. Your contributions to the field of science and technology are truly remarkable and inspiring. We would love to hear your insights on the latest advancements in your field over a delicious meal. Please let us know if you can make it!",
  },
  {
    name: "Mani",
    message: "Dear Mani, we would be delighted to have you join us for dinner. Your achievements in the field of literature have touched the hearts of millions around the world. We would love to hear your thoughts on the power of words and storytelling over a scrumptious meal. We hope you can join us!",
  },
  {
    name: "Nouman",
    message: "Dear Nouman, it would be an absolute pleasure to have you as our guest at dinner. Your expertise in the field of finance and investment is unparalleled. We would be honored to hear your insights on the current state of the global economy and where we are headed. We hope you can make it!",
  },
];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Nouman";
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with the new guest
const newGuest = {
  name: "Ayesha",
  message: "Dear Ayesha, we would be honored to have you join us for dinner. Your contributions to the field of medicine have saved countless lives and we would love to hear about your experiences. Please let us know if you can make it!",
};
guests.splice(2, 1, newGuest);

// Print a second set of invitation messages for the remaining guests
for (const guest of guests) {
  console.log(guest.message);
}
