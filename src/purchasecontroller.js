const { readJSONFile, writeJSONFile } = require("../data/data.js");
const { nanoid } = require("nanoid");
const path = "./data";
const fileName = "data.json";

// Creates an item
function createItem(item) {
  // Take item object as a parameter
  const data = readJSONFile(); //initialize data to read existing data.JSON file
  const newItem = {
    // Create a new item object 'newItem using item parameter.
    id: nanoid(),
    name: item.name || "N/A",
    price: parseFloat(item.price).toFixed(2) || 0,
    color: item.color || "N/A",
    inStock:
      item.inStock !== undefined
        ? item.inStock.trim().toLowerCase() === true
        : false, // convert user input to lowercase to check if it matches the string true, if it does set inStock to be true, else false. This ensures inStock is stored as boolean
    description: item.description || "",
    rating: parseFloat(item.rating) || 0,
    category: item.category || "",
  };

  data.push(newItem); // Push newItem into data
  writeJSONFile(data);
  console.log("Item created successfully.");
}

// This function is responsible for listing all the items from data.json
function listItems() {
  const data = readJSONFile();

  if (data.length === 0) {
    // This checks if data array is empty
    console.log("No items found.");
  } else {
    // If data array is not empty than the code moves on
    console.log("List of items:"); // Heading
    data.forEach((item) => {
      // This is a loop that iterates over data array that also passes a  callback function for each element in the array
      console.log(` Name: ${item.name}`);
      console.log(` Price: $${item.price}`);
      console.log(` Color: ${item.color}`);
      console.log(` Stock: ${item.inStock ? "In stock" : "Out of stock"}`);
      console.log(` Description: ${item.description}`);
      console.log(` Rating: ${item.rating}`);
      console.log(` Category: ${item.category}`);
      console.log("---------------------------");
    });
  }
}

// Finds the item in the data array based on itemId provided, and updates its properties using new values from updateItem
function updateItem(itemId, updatedItem) {
  const data = readJSONFile();
  const itemIndex = data.findIndex((item) => item.id === itemId); // find the index of item.id to match itemId

  if (itemIndex !== -1) {
    // If itemIndex (matching ids) is not equal to -1 it means that an array was found
    data[itemIndex] = {
      // A new object is created using existing item objects at data[itemIndex] and the updatedItem object
      ...data[itemIndex], // The spread syntax is used to copy the properties of existing item object into the new object. This makes sure that new object has all properties of the existing item (data)
      ...updatedItem, // The spread syntax is used again to copy properties of the updateItem object into the new object. This allows any properties in updatedItem to overwrite the original properties in the new object
    }; // If there are the same properties in data[itemIndex] object, and updatedItem object, then the value of updateItem will be used.
    // By essentially combining the properties of existing item and the updated item, a new object is created that respresents the updated item with changes applied and then it assigns the updateobject back to the data array at the same index.
    writeJSONFile(data);
    console.log("Item updated successfully.");
  } else {
    console.log("Item not found.");
  }
}

// Finds the item in the data array based on itemId provided, and removes that particular object in the data.json array
function removeItem(itemId) {
    const data = readJSONFile();
    const dataIndex = data.findIndex((item) => item.id === itemId);

    if (dataIndex === -1) {
        console.log("Item not found")
    } else {
        data.splice(dataIndex, 1); // removes an element from data array at a specific location (dataIndex) first argument is starting index, second argument is remove how many elements.
        writeJSONFile(data);
        console.log("Item removed successfully")
    }
}

// Find the exact item id in readJSONFile and give the details of the item
function viewItem(itemId) {
    const data = readJSONFile();
    const item = data.find((item) => item.id === itemId);

    if (item) {
        console.log("==== Item Details ====")
        console.log(` Name: ${item.name}`);
        console.log(` Price: $${item.price}`);
        console.log(` Color: ${item.color}`);
        console.log(` Stock: ${item.inStock ? "In stock" : "Out of stock"}`);
        console.log(` Description: ${item.description}`);
        console.log(` Rating: ${item.rating}`);
        console.log(` Category: ${item.category}`);
        console.log("---------------------------");
    } else {
        console.log("Item not found.")
    }   
}


module.exports = {
  createItem,
  listItems,
  updateItem,
  removeItem,
  viewItem
};
