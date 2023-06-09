const readline = require("readline"); // readline is commonly used to create command-line interfaces
const {
  listItems,
  createItem,
  updateItem,
  removeItem,
} = require("./purchasecontroller");

// This code sets up a command-line interface to display a menu for a hat store inventory and users can interact with it
const r1 = readline.createInterface({
  // creates a new interface and initialize to r1
  input: process.stdin, // Input stream that reads user input and then
  output: process.stdout, // an output stream is to display output in the terminal
});

// Logs the inventory menu to the consol, displaying actions users can take
function displayMenu() {
  console.log("==== Hat Store Inventory ====");
  console.log("1. List all items");
  console.log("2. Create a new item");
  console.log("3. Exit");
  console.log("4. Update an item");
  console.log("5. Remove an item");
}

// This function takes user input as a parameter and performs different actions based on input.
function handleUserInput(input) {
  switch (input) {
    case "1": // If the input is 1, it calls the listItems() function
      listItems();
      showOptions();
      break;
    case "2": // If the input is 2, it calls promptNewItem function
      promptNewItem();
      break;
    case "3": // If the input is 3, it calls r1.close() to close the interface and exit the program
      r1.close(); // Exit  the interface
      break;
    case "4": // If the input is 4, it calls promptUpdateItem function
      r1.question("Enter the ID of the item you want to update: ", (itemId) => {
        promptUpdateItem(itemId); // r1.question takes a string prompt as first argument and a callback function as second argument which is userinput or (itemId)
      }); // Inside the callback function promptUpdateItem is executed with itemId parameter giving access to itemId value to update the corresponding item
      break;
    case "5": // If the input is 5, it
      promptRemoveItem();
      break;
    default: // If the input doesnt match a case than default to error
      console.log("Invalid input. Please try again.");
      showOptions();
      break;
  }
}

// This function handles the interface for the user and loops if not exited
function promptUser() {
  // r1.question() method prompts the user for input by displaying enter your choice.
  r1.question("Enter your choice: ", (input) => {
    // User input is put as a parameter to the callback function
    handleUserInput(input); // Then it calls the handleUserinput() function with user input as an argument
    if (input !== "3") {
      // if input is not 3 dont close the app
      promptUser(); // promptUser function is called to start the interactive prompt and handle user input repeatedly creating a loop for the user to put an input
    } else {
      r1.close(); // Close the app otherwise
    }
  });
}

// This function was made to show the display menu whenever the the user goes back to the main menu
function showOptions() {
  displayMenu();
  r1.question("Enter your choice ", (choice) => {
    handleUserInput(choice);
  });
}

// This function prompts the user to enter the details of a new item
function promptNewItem() {
  console.log("==== Create a New Item ===="); // Header message
  r1.question("Enter the name of the item: ", (name) => {
    // r1.question() method is used to prompt the user for input. The prompt is the first parameter and  and a callback function as the second parameter. After a user inputs a name it names the name variable
    r1.question("Enter the price of the item: ", (price) => {
      // Similiar to the previous it is used to prompt the user to enter the price of item.
      r1.question("Enter the color of the item: ", (color) => {
        r1.question("Enter the availability of the item: ", (inStock) => {
          r1.question("Enter the description of the item: ", (description) => {
            r1.question("Enter the rating of the item: ", (rating) => {
              r1.question("Enter the category of the item: ", (category) => {
                const item = {
                  // create a new object named item is created using object literal notation. It contains name and price with whatever the user input.
                  name,
                  price: parseFloat(price).toFixed(2), // parse a string representation of a number to a numeric value
                  color,
                  inStock: inStock,
                  description,
                  rating: parseFloat(rating),
                  category,
                };

                createItem(item); // createItem function is called with item as an argument and this creates a new item in the inventory based on user input
                showOptions();
                // promptUser(); // This restarts the prompt allowing users to continue interacting with the menu
              });
            });
          });
        });
      });
    });
  });
}
function promptUpdateItem(itemId) {
  console.log("==== Update Item ====");
  r1.question("Enter the name of the items (press Enter to skip): ", (name) => {
    r1.question(
      "Enter the price of the item (press Enter to skip): ",
      (price) => {
        r1.question(
          "Enter the color of the item (press Enter to skip): ",
          (color) => {
            r1.question(
              "Enter the availability of the item (press Enter to skip): ",
              (inStock) => {
                r1.question(
                  "Enter the description of the item (press Enter to skip): ",
                  (description) => {
                    r1.question(
                      "Enter the rating of the item (press Enter to skip): ",
                      (rating) => {
                        r1.question(
                          "Enter the category of the item (press Enter to skip): ",
                          (category) => {
                            const updatedItem = {};

                            if (name.trim() !== "") {
                              // Use trim to remove whitespace from both ends of the string
                              updatedItem.name = name; // Checks if the trimmed name value is not an empty string.
                            } // If not empty it means the user provided a name for the item and the user updated name gets assiged to name
                            // If the user skips inputting a name, the name property will not be added to name
                            if (price.trim() !== "") {
                              updatedItem.price = parseFloat(price).toFixed(2);
                            }
                            if (color.trim() !== "") {
                              updatedItem.color = color;
                            }
                            if (inStock.trim() !== "") {
                              updatedItem.inStock =
                                inStock.trim().toLowerCase() === "true"; // Use trim and toLowerCase for user flexibility and variations, i.e (true, True, TRUE, TrUe)
                            }
                            if (description.trim() !== "") {
                              updatedItem.description = description;
                            }
                            if (rating.trim() !== "") {
                              updatedItem.rating = parseFloat(rating);
                            }
                            if (category.trim() !== "") {
                              updatedItem.category = category;
                            }

                            updateItem(itemId, updatedItem);
                            showOptions();
                            // promptUser();
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
}

function promptRemoveItem(itemId) {
  console.log("==== Remove Item ====");
  r1.question("Enter the item ID you want to remove: ", (inputeItemId) => {
    removeItem(inputeItemId); // call removeItem and inputeItemId is user input
    showOptions();
  });
}

displayMenu();
promptUser();
