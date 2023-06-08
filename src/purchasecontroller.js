const { readJSONFile, writeJSONFile } = require("../data/data.js")
const { nanoid } = require("nanoid");
const data = readJSONFile();

function createItem(item) {
    // const data = readJSONFile();
    const newItem = { ...item, id: nanoid() }; // Using spread syntax to copy properties of the item object and equal newItem, this also adds the new property 'id'
    data.push(newItem);
    writeJSONFile(data);
    console.log("Item created successfully.");
}
// This function is responsible for listing all the items from data.json
function listItems() {
    // const data = readJSONFile();

    if (data.length === 0) { // This checks if data array is empty
        console.log('No items found.');
    } else { // If data array is not empty than the code moves on
        console.log('List of items:'); // Heading
        data.forEach((item) => {  // This is a loop that iterates over data array that also passes a  callback function for each element in the array
            console.log(` Name: ${item.name}`);
            console.log(` Price: $${item.amount}`);
            console.log(` Stock: ${item.inStock}`)
        })
    }
}

module.exports = {
    createItem,
    listItems
}