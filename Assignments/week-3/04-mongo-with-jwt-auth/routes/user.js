// const { Router } = require("express");
// const router = Router();
const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const app = express();
const jwt = require("jsonwebtoken");
const { JWT_SECRET1 } = require("../config");
app.use(express.json());
// User Routes
app.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.json({ msg: "User already exists" });
    }

    await User.create({
      username: username,
      password: password,
    });
    res.json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(404).json("username and password required");
    }
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      res.status(404).json("User does not exist ,Please sign up");
    }
    var token = jwt.sign({ username: username }, JWT_SECRET1);
    console.log(token);
    return res.json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

app.get("/courses", async (req, res) => {
  // Implement fetching all courses logic
  // Implement listing all courses logic
  const token = req.headers.authorization;
  const words1 = token.split(" ");
  const jwtToken1 = words1[1];
  const decodedUser = jwt.verify(jwtToken1, JWT_SECRET1);
  // console.log(error);
  if (decodedUser) {
    username = decodedUser.username;
  }

  const response = await Course.find({});

  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      res.statue(404).json({ msg: "User does not exists" });
    }

    const allCourses = await Course.find({});
    const formattedCourses = allCourses.map((course) => ({
      id: course._id,
      title: course.title,
      course_description: course.course_description,
      price: course.price,
      imageLink: course.imageLink,
      published: course.published,
    }));
    res.json({ courses: formattedCourses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  // const authorization = req.headers.authorization;
  const courseId = req.params.courseId;
  try {
    const username = req.admin;
    console.log(username);
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ msg: "course not found" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    if (!user.purchasedCourses.includes(courseId)) {
      user.purchasedCourses.push(courseId);
      await user.save();
    } else {
      res.status(404).json({ msg: "course already purchased" });
    }
    res.json("Course purchased successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});
app.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.admin;
  try {
    const user = await User.findOne({ username }).populate("purchasedCourses");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json({
      purchasedCourses: user.purchasedCourses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(3001);
// module.exports = app;
