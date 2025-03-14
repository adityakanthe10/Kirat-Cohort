const SurveyModel = require("../models/surveyModel");

class SurveyController {
  async createSurvey(req, res) {
    // const survey =  SurveyModel(req.body);
    try {
      const newSurvey = await SurveyModel.createSurvey(req.body);
      res.status(201).json(newSurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllSurveys(req, res) {
    try {
      const newsurvey = await SurveyModel.getAllSurveys();
      res.status(201).json(newsurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new SurveyController();
