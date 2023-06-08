const { readJSONFile, writeJSONFile } = require("../data/data.js")
const { nanoid } = require("nanoid");
const path = "./data";
const fileName = "data.json";

// Creates an item
function createItem(item) { // Take item object as a parameter
    const data = readJSONFile(); //initialize data to read existing data.JSON file
    const newItem = { // Create a new item object 'newItem using item parameter.
        name: item.name || "N/A",
        price: item.price !== undefined ? item.price : 0,
        color: item.color || "N/A",
        inStock: item.inStock || false,
        description: item.description || "",
        rating: item.rating !== undefined ? item.rating : 0,
        category: item.category || ""
    };

    // console.log("new item price:", newItem.price);
    // const newItem = { ...item, id: nanoid() }; // Using spread syntax to copy properties of the item object and equal newItem, this also adds the new property 'id'
    data.push(newItem); // Push newItem into data
    writeJSONFile(data);
    console.log("Item created successfully.");
}

// This function is responsible for listing all the items from data.json
function listItems() {
    const data = readJSONFile();

    if (data.length === 0) { // This checks if data array is empty
        console.log('No items found.');
    } else { // If data array is not empty than the code moves on
        console.log('List of items:'); // Heading
        data.forEach((item) => {  // This is a loop that iterates over data array that also passes a  callback function for each element in the array
            console.log(` Name: ${item.name}`);
            console.log(` Price: $${item.price}`);
            console.log(` Color: ${item.color}`);
            console.log(` Stock: ${item.inStock ? 'inStock' : 'outOfStock'}`);
            console.log(` Description: ${item.description}`);
            console.log(` Rating: ${item.rating}`);
            console.log(` Category: ${item.category}`);
            console.log("---------------------------");
        })
    };
}


module.exports = {
    createItem,
    listItems,
}