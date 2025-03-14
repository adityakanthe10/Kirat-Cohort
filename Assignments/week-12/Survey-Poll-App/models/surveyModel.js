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

  static async getByIdSurveys(id) {
    return await prisma.survey.findUnique({
      where: { id },

      include: {
        questions: {
          include: {
            Option: true,
          },
        },
      },
    });
  }

  static async createSurvey(data) {
    return await prisma.survey.create({
      data: {
        title: data.title,
        questions: {
          create: data.questions.map((question) => ({
            question: question.text,
            Option: {
              create: question.options.map((option) => ({
                option: option.text,
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            Option: true,
          },
        },
      },
    });
  }

  static async updateSurvey(id, data) {
    console.log("Data received for update:", data);

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error("Invalid data: questions must be an array");
    }

    return await prisma.survey.update({
      where: { id: data.id },
      data: {
        title: data.title,
        questions: {
          create: data.questions.map((question) => ({
            question: question.question,
            Option: {
              create: (question.Option || []) // Ensure Option exists
                .filter((option) => option.text) // Ensure option.text exists
                .map((option) => ({
                  option: option.text,
                })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            Option: true,
          },
        },
      },
    });
  }

  static async deleteSurvey(surveyid) {
    // if (isNaN(surveyId)) {
    //   throw new Error("Invalid survey Id");
    // }

    try {
      // Delete options first
      await prisma.option.deleteMany({
        where: {
          Question: {
            surveyId: surveyid,
          },
        },
      });

      // Then delete questions
      await prisma.question.deleteMany({
        where: {
          surveyId: surveyid,
        },
      });

      // Finally delete the survey
      return await prisma.survey.delete({
        where: {
          id: surveyid,
        },
      });
    } catch (error) {
      return error;
    }
    //   const surveyId = Number(id);
    //   if (isNaN(surveyId)) {
    //     throw new Error("Invalid survey Id");
    //   }
    //   return await prisma.survey.delete({ where: { id: surveyId } });
    // }
  }
}

module.exports = SurveyModel;
