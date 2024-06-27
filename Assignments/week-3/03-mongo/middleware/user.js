const zod = require("zod");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  const Schema = zod.string().email();
  const Schema1 = zod.string().min(7);
  const username1 = Schema.safeParse(username);
  const password1 = Schema.safeParse(password);
  if (!username1 || !password1) {
    return res.status(404).json({ msg: "username and password required" });
  }
  next();
}

module.exports = userMiddleware;
