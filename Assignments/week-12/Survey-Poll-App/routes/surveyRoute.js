const express = require("express");
const SurveyController = require("../controllers/surveyController");

const router = express.Router();
const surveyController = new SurveyController();

router.get("/", surveyController.getAllSurveys);

module.exports = router;
