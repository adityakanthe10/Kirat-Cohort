// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

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
    fs.appendFile("4-write-to-file.md", `\n${textToAdd}`, (err) => {
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

async function main() {
  console.log("Add content to file here");
  const textToAdd = await writeText();
  await appendText(textToAdd);
  //   console.log("text appended to the file");
}

main();
