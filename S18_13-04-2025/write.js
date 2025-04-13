const fs = require("fs");

fs.writeFile("Demo.txt", "Hello, How r u node dev's", (error) => {
  if (error) {
    console.log("Failed to create");
  } else {
    console.log("Created Successfully");
  }
});
