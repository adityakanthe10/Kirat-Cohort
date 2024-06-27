// const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
// const router = Router();

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

app.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const username = req.headers.username;
  const password = req.headers.password;
  const title = req.body.title;
  const course_description = req.body.course_description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

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
    res.json({ msg: "Course Created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Course Created Successfully", courseId: newCourse._id });
  }
  //Findout admin exists or not.
  // If yes then create course and if not tell the admin to sign in first
});

app.get("/courses", adminMiddleware, async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const retrieveCourses = await Course.find({
    username: username,
  });
  // res.json({
  //   courses: retrieveCourses,
  // });
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
