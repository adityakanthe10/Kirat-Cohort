const express = require("express");
const surveyController = require("../controllers/surveyController");

const router = express.Router();

router.post("/", surveyController.createSurvey);
router.get("/", surveyController.getAllSurveys);

module.exports = router;
