//  To read a file in your fileSystem

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// // my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// // callback function to call
// function onDone(data) {
//   console.log(data);
// }

// kiratsReadFile(onDone);

// function kiratsReadFile() {
//   return new Promise(function (resolve) {
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// console.log(kiratsReadFile().then(onDone));
// kiratsReadFile().then(onDone);

//  Normal Syntax

// function kiratsReadFile() {
//   let p = new Promise(function (resolve) {
//     resolve("hi there");
//     console.log(resolve);
//   });
//   return p;
// }

// function main() {
//   var a = kiratsReadFile();
//   console.log(a);
//   a.then(function (value) {
//     console.log(value);
//   });
// }

// main();

// Aync and Await Syntax

// function kiratsReadFile() {
//   let p = new Promise(function (resolve) {
//     resolve("hi there");
//     console.log(resolve);
//   });
//   return p;
// }

// async function main() {
//   let value = await kiratsReadFile();
//   console.log(value);
// }

// main();

// Callback Syntax

// function kiratsAsyncFunction(callback) {
//   // do some aync logic here
//   callback("hi there");
// }

// async function main() {
//   kiratsAsyncFunction(function (value) {
//     console.log(value);
//   });
// }

// main();

// Promise (then) Syntax

// function kiratsAsyncFunction() {
//   return new Promise(function (resolve) {
//     resolve("hi there");
//   });

// }

// function main() {
//   kiratsAsyncFunction().then(function (value) {
//     console.log(value);
//   });
// }

// main();

// Async/Await Syntax

// function kiratsAsyncFunction() {
//   return new Promise(function (resolve) {
//     resolve("hi there");
//   });
// }

// async function main() {
//   let value = await kiratsAsyncFunction();
//   console.log(value);
// }
// main();
