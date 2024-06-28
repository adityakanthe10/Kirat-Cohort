const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization; // bearer token
  console.log(token);
  const words = token.split(" "); // ["Bearer", "token"]
  console.log(words);
  const jwtToken = words[1]; // token
  console.log(jwtToken);

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    console.log(decodedValue);
    if (decodedValue.username) {
      req.admin = decodedValue.username;
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = adminMiddleware;
