const readline = require('readline'); // readline is commonly used to create command-line interfaces
const { listItems, createItem } = require('./purchasecontroller');

// This code sets up a command-line interface to display a menu for a hat store inventory and users can interact with it
const r1 = readline.createInterface({
    input: process.stdin, // Input stream that reads user input and then
    output: process.stdout // an output stream is to display output in the terminal
});

// Logs the inventory menu to the consol, displaying actions users can take
function displayMenu() {
    console.log('==== Hat Store Inventory ====');
    console.log('1. List all items');
    console.log('2. Exit');
}

// This function takes user input as a parameter and performs different actions based on input.
function handleUserInput(input) {
    switch (input) {
        case '1': // If the input is 1, it calls the listItems() function
            listItems();
            break;
        case '2': // If the input is 3, it calls r1.close() to close the interface and exit the program
                r1.close();
                break;
                default: // If the input doesnt match a case than default to error
                console.log('Invalid input. Please try again.');
    }
}

// 
function proptUser() { // r1.question() method prompts the user for input by displaying enter your choice.
    r1.question('Enter your choice: ', (input) => { // User input is put as a parameter to the callback function
        handleUserInput(input); // Then it calls the handleUserinput() function with user input as an argument
        proptUser(); // proptUser function is called to start the interactive prompt and handle user input repeatedly creating a loop for the user to put an input
    }); // This loop continues to loop until the program exits (when user enters 3)
}

displayMenu();
proptUser();