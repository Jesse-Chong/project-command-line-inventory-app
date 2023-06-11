const { readFileSync, writeFileSync } = require("fs");
const path = "./data";
const cartFileName = "cartdata.json";

function readCartData() {
    try {
        const object = readFileSync(`${path}/${cartFileName}`, { encoding: "utf-8" });
        return object ? JSON.parse(object) : [];
    } catch (error) {
        console.error(`Error reading ${cartFileName}:` , error);
        return [];
    }
}

function writeCartData(data) {
    try {
        const jsonContent = JSON.stringify(data, null, 2);
        writeFileSync(`${path}/${cartFileName}`,jsonContent , { encoding: "utf-8" });
    } catch (error) {
        console.error(`Error writing ${cartFileName}:`, error);
    }
}

module.exports = {
    readCartData,
    writeCartData
};