const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class SurveyModel {
  static async getAllSurveys() {
    return await prisma.survey.findMAny();
  }

  static async getSurveyById(id) {
    return await prisma.survey.findUnique({ where: { id } });
  }

  static async createSurvey(data) {
    return await prisma.survey.create({ data });
  }
}

module.exports = SurveyModel;
