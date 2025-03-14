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

  async getByIdSurveys(req, res) {
    try {
      const surveyId = Number(req.params.id);
      const survey = await SurveyModel.getByIdSurveys(surveyId);
      if (!survey) {
        return res.status(404).json({ message: error.message });
      }
      res.status(201).json(survey);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateSurvey(req, res) {
    try {
      const surveyId = Number(req.params.id);
      const updatedSurvey = await SurveyModel.updateSurvey(
        {
          surveyId,
        },
        req.body
      );
      res.status(201).json(updatedSurvey);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteSurvey(req, res) {
    try {
      const surveyId = Number(req.params.id);
      const deletedSurvey = await SurveyModel.deleteSurvey(surveyId);
      console.log(deletedSurvey);
      res.status(201).json({ msg: "Survey Deleted Successsfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new SurveyController();
