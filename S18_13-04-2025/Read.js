const fs = require("fs");

fs.readFile("Products.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Failed to read the content");
  } else {
    console.log(data);
  }
});
