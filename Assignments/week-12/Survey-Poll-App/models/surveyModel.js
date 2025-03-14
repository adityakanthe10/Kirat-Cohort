const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class SurveyModel {
  static async getAllSurveys() {
    return await prisma.survey.findMany({
      include: {
        questions: {
          include: {
            Option: true,
          },
        },
      },
    });
  }

  static async getSurveyById(id) {
    return await prisma.survey.findUnique({ where: { id } });
  }

  static async createSurvey(data) {
    return await prisma.survey.create({
      data: {
        title: data.title,
        questions: {
          create: data.questions.map((question) => ({
            question: question.text, // Fix field name here
            Option: {
              // Fix relation name here
              create: question.options.map((option) => ({
                option: option.text, // Fix field name here
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            Option: true, // Fix relation name here
          },
        },
      },
    });
  }
}

module.exports = SurveyModel;
