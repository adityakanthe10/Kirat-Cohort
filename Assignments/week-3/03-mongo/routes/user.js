// const { Router } = require("express");
// const router = Router();
const express = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index");
const { Course } = require("../db/index");
const app = express();
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

app.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const username = req.headers.username;
  const password = req.headers.password;
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

  const { username, password } = req.headers;
  const courseId = req.params.courseId;
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({ msg: "course not found" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }
    if (!user.purchasedCourses.includes(courseId)) {
      user.purchasedCourses.push(courseId);
      await user.save();
    } else {
      res.status(404).json({ msg: "course already purchased" });
    }
    res.json("Course purchased successfully");
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username, password } = req.headers;
  if (!username || !password) {
    res.statue(400).json("Invalid username or password");
  }
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
// module.exports = router;
