const { User } = require("../db");
const { JWT_SECRET1 } = require("../config");
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words1 = token.split(" ");
  const jwtToken1 = words1[1];
  try {
    const decodedUser = jwt.verify(jwtToken1, JWT_SECRET1);
    console.log(decodedUser);
    if (decodedUser) {
      req.admin = decodedUser.username;
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Incorrect Inputs",
    });
  }
}
module.exports = userMiddleware;
