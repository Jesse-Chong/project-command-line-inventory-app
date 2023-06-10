const { readFileSync, writeFileSync } = require("fs");


const path = "./data";
const fileName = "data.json";

function readJSONFile() {
  try {
    // use try and catch block to handle any errors that may occur during file reading or writing
    const object = readFileSync(`${path}/${fileName}`, { encoding: "utf-8" });
    return object ? JSON.parse(object) : [];
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return [];
  }
};

function writeJSONFile(data) {
  try {
    const formattedData = data.map((item) => {
      const { id, price, ...rest } = item; // destructure the id property and store the rest in the rest object and
      return { id, price, ...rest }; // combine the id property with the rest of the properties with id on top
    });

    const jsonContent = JSON.stringify(formattedData, null, 2);
    writeFileSync(`${path}/${fileName}`, jsonContent, { encoding: "utf-8" }); // first argument is file path, second argument is the data that is to be written, the third argument is encoding for this file using UTF-8.
  } catch (error) {
    // if any errors are caught , log an error message using console.error
    console.error(`Error writing ${fileName}:`, error);
  }
};

module.exports = {
  readJSONFile,
  writeJSONFile,
};
