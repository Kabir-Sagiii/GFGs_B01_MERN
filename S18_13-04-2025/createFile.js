const fs = require("fs");

fs.appendFile("Products.txt", "This is first line", (err) => {
  if (err) {
    console.log("File failed to Create");
  } else {
    console.log("File Created");
  }
});
