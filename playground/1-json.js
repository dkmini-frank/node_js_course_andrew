const fs = require("fs");
// const book = {
//   title: "this is the book title",
//   author: "here is the author",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataObject = JSON.parse(dataBuffer.toString());
dataObject.title = "the book name changed";
dataObject.age = "18";
const newBookJSONdata = JSON.stringify(dataObject);
fs.writeFileSync("1-json.json", newBookJSONdata);
console.log("dataObject", dataObject);
