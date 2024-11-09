const { authMiddleware } = require("../middleware");
const express = require("express");
const zod = require("zod");
const router = express.Router();
const { User } = require("../db");
const { Account } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// schema validation for signup
const signUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

// backend auth route to signup
router.post("/signup", async (req, res) => {
  const body = req.body;
  const success = signUpSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      message: "incorrect username /user already exists",
      error: error,
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "user already exists! ",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  //  create a new account

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
});

// schema validation for signin

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

//  signin route

router.post("/signin", async (req, res) => {
  // const body = req.body;
  // const success = signInSchema.safeParse().body;
  const success = signInSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "incorrect username / password",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    return res.status(200).json({
      token: token,
    });
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

// update schema

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

// route to update information

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
  });
  res.json({
    message: "updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
