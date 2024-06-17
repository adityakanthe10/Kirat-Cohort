const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();
// const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/", function (req, res) {
  console.log(req.body);
  setTimeout(() => {
    res.status(401).send("Hello World");
  }, 1000);
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
