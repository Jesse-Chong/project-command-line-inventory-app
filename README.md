# project-command-line-inventory-app

This is a command-line inventory app built with JavaScript. It allows users to manage an inventory of items for a hat store. Users can perform various functions such as creating new items, updating existing items, listing all items, removing items, along with viewing item details.

## Getting Started

1. Fork and clone this repository
2. Open up the repository in your code editor.
3. Start a new node project
4. Set up a .gitignore file
5. Install nanoid version 3
6. Install chalk version 4

## Guide
To start the inventory app, run the following command: node src/index.js
The app will display a menu that looks like the list below and show different numbers you can enter to go into different options.

==== Hat Store Inventory ====
1. List all items
2. Create a new item
3. Exit
4. Update an item
5. Remove an item
6. See the details of an item
7. Add to cart
8. View cart
9. Remove item in cart
10. remove all items in cart

## User input
1. List all items: Selecting this option will list all items in the inventory along with their full details that is located in the data.json.
2. Create a new item: Selecting this option will prompt you (the user) to enter details of a new item which will be entered into the inventory (data.json).
3. Exit: Exits the application.
4. Update an item: Selecting this option will prompt you to enter the ID of the item you want to update. You can update or leave the value the same for each item's property and will properly update the inventory.
5. Remove an item: Selecting this option will prompt you to enter the ID of the item you want to remove, this will be removed from the inventory.
6. See details of an item: Selecting this option will prompt you to enter the ID of the item you want to see.
7. Add to cart: Selecting this option will allow you to enter an Id of the item you want to add to your cart. This will update your cart (cardata.json)
8. View cart: Selecting this option will display all the items currently in your cart.
9. Remove item in cart: Selecting this option will prompt you to enter the ID of the item you want to remove in your cart.
10. Remove all items in cart: Selecting this option will remove all the items in your cart.



