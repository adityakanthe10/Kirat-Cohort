//  Middlewares,global Catches and zod

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;
//   res.send("you have  " + kidneyLength + " kidneys");
// });

// app.listen(3000);

//  ZOD

const express = require("express");
const zod = require("zod");
const app = express();

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "harkirat" && password != "pass") {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}
const Schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", userMiddleware, function (req, res) {
  const kidneys = req.body.kidneys;
  const response = Schema.safeParse(kidneys);
  res.json(response);
});

app.listen(3000);
