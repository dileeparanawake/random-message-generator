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

// delay

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//Function - select random message from array & return.

const getRandomContent = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

//Function - greet user.

const greetUser = () => {
  return `${getRandomContent(greetings)}\n`;
};

//Function - create quote.

const inspirationalMessage = () => {
  return `"${getRandomContent(opening)}\n\n${getRandomContent(
    middle
  )} ${getRandomContent(closing)}"\n\nWisdom by: ${getRandomContent(
    authors
  )}.\n\n`;
};

//Main program function

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const waitForInput = () => {
  // wait for user input
  return new Promise((resolve) => {
    rl.question('Press Enter to be inspired or "q" to quit: \n\n', (input) => {
      resolve(input);
    });
  });
};

async function main() {
  console.log(greetUser()); // greet user

  while (true) {
    const userInput = await waitForInput(); // Wait for user input

    if (userInput.toLowerCase() === "q") {
      console.log("Quitting the program. Goodbye!");
      rl.close(); // Close the readline interface
      return; // Exit the program
    }
    // generate & print quote
    console.log(`Thinking...\n`); // make a thinking phrase
    await delay(1550);
    console.log(`${getRandomContent(thinking_phrases)}\n`);
    await delay(2000);
    console.log("...\n\n");
    await delay(2000);
    console.log(`${inspirationalMessage()}\n`); // generate and log inspiring message
    await delay(4000);
  }
}

// run program

main();
