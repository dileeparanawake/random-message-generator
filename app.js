// Generate inspirational quotes.

// import content from content.js
const {
  opening,
  middle,
  closing,
  authors,
  thinking_phrases,
  greetings,
} = require("./src/content.js");

/* 

Key functions

1. Run program.
2. Greet user.
3. Prompt user to hit enter to get message.
4. Tell user computer is thinking.
5. Generate message from components.
6. Log message for user.
7. Prompt user to hit return to view another message or enter q to quit.

 */

//Function - select random message from array & return.

const getRandomContent = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

//Function - greet user.

//Function - quit on q.

//Function - run on enter.

//Function - get today's date.

//Function - create quote.
