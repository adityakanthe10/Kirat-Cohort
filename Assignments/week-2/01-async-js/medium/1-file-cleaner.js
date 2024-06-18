const fs = require("fs");

function removeSpaces(text) {
  return text.split(/\s+/).join(" ");
}

fs.readFile("File-Cleaner.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const cleanedData = removeSpaces(data);

  fs.writeFile("File-Cleaner.txt", cleanedData, "utf-8", (err) => {
    if (err) {
      console.error("Error writing to the file", err);
    } else {
      console.log("File cleaned successfully!");
    }
  });
});
