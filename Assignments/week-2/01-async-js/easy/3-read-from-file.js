// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readingFile() {
  return new Promise((resolve) => {
    fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      resolve();
    });
  });
}

function writeText() {
  return new Promise((resolve) => {
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Write text here :", (textToAdd) => {
      rl.close();
      resolve(textToAdd);
    });
  });
}

function appendText(textToAdd) {
  return new Promise((resolve, reject) => {
    fs.appendFile("3-read-from-file.md", `\n${textToAdd}`, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("Text appended to the file");
        resolve();
      }
    });
  });
}

async function Main() {
  console.log("Reading file before adding contents..");
  await readingFile();
  const textToAdd = await writeText();
  await appendText(textToAdd);
  console.log("Reading file after writing..");
  await readingFile();
}

Main();
