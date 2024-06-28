// const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");

const app = express();
// Admin Routes
app.use(express.json());
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    if (!username || !password) {
      return res.json({ msg: "Username and password required" });
    }
    const existingAdmin = await Admin.findOne({
      username,
    });
    if (existingAdmin) {
      return res.status(404).send("Admin already exists");
    }
    await Admin.create({
      username: username,
      password: password,
    });
    res.json({ msg: "Admin created successfully" });
  } catch (error) {
    console.log("Error creating admin:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(404).json("username and password required");
    }
    const existingAdmin = await Admin.findOne({ username });
    if (!existingAdmin) {
      res.status(404).json("Admin does not exist ,Please sign up");
    }
    var token = jwt.sign({ username: username }, JWT_SECRET);
    console.log(token);
    return res.json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/courses", adminMiddleware, async (req, res) => {
  const authorization = req.headers.authorization;
  const title = req.body.title;
  const course_description = req.body.course_description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const username = req.admin;
  try {
    await Course.create({
      username: username,
      // password: password,
      title: title,
      course_description: course_description,
      price: price,
      imageLink: imageLink,
      published: true,
    });
    res.json({ msg: "Course Created successfully", courseId: Course._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/courses", adminMiddleware, async (req, res) => {
  const username = req.admin;
  const retrieveCourses = await Course.find({
    username: username,
  });
  res.json({
    retrieveCourses: retrieveCourses.map((course) => ({
      id: course._id,
      title: course.title,
      description: course.course_description,
      price: course.price,
      imageLink: course.imageLink,
      published: course.published,
    })),
  });
});

app.listen(3000);

// module.exports = router;
