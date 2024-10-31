// import { authMiddleware } from "../middlware.js";
const { authMiddleware } = require("../middleware");
const express = require("express");
const zod = require("zod");
const router = express.Router();
// const app = express();
// const express = express.Router();s

// schema validation for signup
const signUpSchema = zod.object({
  userName: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

// schema validation for signin

const signInSchema = zod.object({
  userName: zod.string().email(),
  password: zod.string().min(6),
});
// backend auth route to signup
router.post("/signup", async (req, res) => {
  const body = req.body;
  const success = signUpSchema.safeParse().body;

  if (!success) {
    return res.json({
      message: "incorrect username /user already exists",
    });

    const user = User.findOne({
      userName: body.userName,
    });

    if (user_id) {
      return res.json({
        message: "user already exists! ",
      });
    }

    const dbUser = await User.create(body);
    const token = jwt.sign(
      {
        userId: dbUser._id,
      },
      JWT_SECRET
    );
    return res.json({
      message: "User created successfully",
      token: token,
    });
  }
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const success = signInSchema.safeParse().body;
  if (!success) {
    return res.status(411).json({
      message: "incorrect username / password",
    });
  }
  const existingUser = await user.findOne({
    userName: req.body.userName,
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
});

// route to update information

const updateBod = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/user", authMiddleware, async (req, res) => {
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
