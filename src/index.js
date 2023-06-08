const readline = require('readline'); // readline is commonly used to create command-line interfaces
const { listItems, createItem } = require('./purchasecontroller');

// This code sets up a command-line interface to display a menu for a hat store inventory and users can interact with it
const r1 = readline.createInterface({ // creates a new interface and initialize to r1
    input: process.stdin, // Input stream that reads user input and then
    output: process.stdout // an output stream is to display output in the terminal
});

// Logs the inventory menu to the consol, displaying actions users can take
function displayMenu() {
    console.log('==== Hat Store Inventory ====');
    console.log('1. List all items');
    console.log('2. Create a new item');
    console.log('3. Exit');
}

// This function takes user input as a parameter and performs different actions based on input.
function handleUserInput(input) {
    switch (input) {
        case '1': // If the input is 1, it calls the listItems() function
            listItems();
            break;
        case '2': // If the input is 2, it calls promptNewItem function
        promptNewItem()
            break;
        case '3': // If the input is 3, it calls r1.close() to close the interface and exit the program
                r1.close(); // Exit  the interface
                break;
                default: // If the input doesnt match a case than default to error
                console.log('Invalid input. Please try again.');
    }
}

// This function handles the interface for the user and loops if not exited
function promptUser() { // r1.question() method prompts the user for input by displaying enter your choice.
    r1.question('Enter your choice: ', (input) => { // User input is put as a parameter to the callback function
        handleUserInput(input); // Then it calls the handleUserinput() function with user input as an argument
        if(input !== '3') { // if input is not 3 dont close the app
            promptUser(); // promptUser function is called to start the interactive prompt and handle user input repeatedly creating a loop for the user to put an input
        } else {
            r1.close(); // Close the app otherwise
        }
         }); 
    }
// This function prompts the user to enter the details of a new item
function promptNewItem() {
    console.log('==== Create a New Item ===='); // Header message
    r1.question('Enter the name of the item: ', (name) => { // r1.question() method is used to prompt the user for input. The prompt is the first parameter and  and a callback function as the second parameter. After a user inputs a name it names the name variable
        r1.question('Enter the price of the item: ', (price) => { // Similiar to the previous it is used to prompt the user to enter the price of item. 
            const item = { // create a new object named item is created using object literal notation. It contains name and price with whatever the user input.
                name,
                price: parseFloat(price).toFixed(2) // parse a string representation of a number to a numeric value
            };

            createItem(item); // createItem function is called with item as an argument and this creates a new item in the inventory based on user input
            promptUser(); // This restarts tje promp allowing users to continue interacting with the menu
        });
    });
}

displayMenu();
promptUser();