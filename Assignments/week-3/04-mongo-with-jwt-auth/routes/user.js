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

app.post("./signin", (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(404).json("username and password required");
    }
    const existingAdmin = await Admin.findOne({ username });
    if (!existingAdmin) {
      res.status(404).json("Admin does not exist ,Please sign up");
    }
    var token = jwt.sign({ username:username }, JWT_SECRET1);
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
  const response = await Course.find({});
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
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

app.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

app.listen(3001);
// module.exports = app;
