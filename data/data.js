const { nanoid } = require("nanoid");
const fs = require("fs");
const { readFileSync, writeFileSync } = fs;

const path = "./data";
const fileName = "data.json";

function readJSONFile() {
try { // use try and catch block to handle any errors that may occur during file reading or writing
    const object = readFileSync(`${path}/${fileName}`, "utf-8");
    return object ? JSON.parse(object) : []
} catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return [];
  }
}

function writeJSONFile(path, fileName, data) {
    try{
    data = data.map((item) => ({ ...item, id: nanoid() })); // Use map to iterate over each item in the data array and create a new object with ealready existing properties of each item using the spread syntax. It also assigns a new id property to each item using nanoid to give each item a unique identifier
    data = JSON.stringify(data, null, 2);
    writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" }); // first argument is file path, second argument is the data that is to be written, the third argument is encoding for this file using UTF-8.
} catch (error) { // if any errors are caught , log an error message using console.error
    console.error(`Error reading ${fileName}:`, error);
  }
}

module.exports = {
    readJSONFile,
    writeJSONFile
};