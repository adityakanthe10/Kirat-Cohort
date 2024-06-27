const { Admin } = require("../db/index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  const adminExist = Admin.findOne({ username });
  if (adminExist) {
    return res.status(404).json({ msg: "Admin already exist" });
  }
  next();
}

module.exports = adminMiddleware;
