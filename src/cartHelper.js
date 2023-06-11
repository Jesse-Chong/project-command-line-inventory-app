const { readCartData } = require("../data/cartdata.js");
const { readJSONFile } = require("../data/data.js");

// Finds the item in the data array based on itemId provided, use for cart functions
function getItemById(itemId) {
    const data = readJSONFile();
    const item = data.find((item) => item.id === itemId);
    return item || null;
}

module.exports = {
    getItemById
}