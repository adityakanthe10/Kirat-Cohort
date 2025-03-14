const SurveyModel = require("../models/surveyModel");

class SurveyController {
  async createSurvey(req, res) {
    const survey = new SurveyModel(req.body);
    try {
      const newSurvey = await survey.save();
      res.status(201).json(newSurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new SurveyController();
