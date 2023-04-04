const people: string[] = ['HAMZA', 'RAHAT', 'MANI', 'NOUMAN'];

const messages: { [key: string]: string } = {
  'HAMZA': 'Hey Hamza, how is your day going?',
  'RAHAT': 'Hi Rahat, hope you have a great day!',
  'MANI': 'Hello Mani, you are doing amazing!',
  'NOUMAN': 'Hi Nouman, have a wonderful day!',
};

for (const person of people) {
  console.log(messages[person]);
}
