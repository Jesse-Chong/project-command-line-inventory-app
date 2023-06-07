const { readFileSync, writeFileSync } = require("node:fs");

const path = "./data";
const fileName = "data.json";

function readJSONFile(path, fileName) {
    const object = readFileSync(`${path}/${fileName}`, "utf-8");
    return object ? JSON.parse(object) : [];
};

function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data, null, 2);
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
};

module.exports = {
    readJSONFile,
    writeJSONFile
}