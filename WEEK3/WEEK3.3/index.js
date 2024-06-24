const jwt = require("jsonwebtoken");

const contents = {
  name: "harkirat",
  accountNumber: 123123123,
  iar: 123132314414,
};

// const token = jwt.sign(contents, "secret");
const token = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhciI6MTIzMTMyMzE0NDE0LCJpYXQiOjE3MTkyMTc0MzV9.WTFYLIYdojPtrw9EyvefDsfD6E3VGuiErfbLl0Abdbk",
  "secret"
);
console.log(token);
