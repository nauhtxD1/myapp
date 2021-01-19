const models = require("../models/index");
const { Sequelize, sequelize } = models;
const { Op } = Sequelize;
const moment = require("moment");
const CustomError = require("../common/libs/custom-error");

const getAllProblems = async () => {
  return await models.problem.findAll({
    include: [
      {
        model: models.user,
        attributes: ["username"],
      },
      {
        model: models.status,
        attributes: ["name"],
      },
    ],
    order: [["updatedAt", "DESC"]],
    where: { isActive: true },
  });
};

const getAllCountProblems = async () => {
  const all = await models.problem.scope("ms1").findAll({
    attributes: [[sequelize.fn("count", sequelize.col("id")), "count"]],
  });
  const lastWeek = await models.problem.scope("ms1").findAll({
    attributes: [[sequelize.fn("count", sequelize.col("id")), "count"]],
    where: { updatedAt: { [Op.gte]: moment().subtract(7, "days").toDate() } },
  });
  return { all, lastWeek };
};

const createProblem = async (input) => {
  await models.problem.create({ ...input });
};

const updateProblem = async (input) => {
  const { id } = input;
  try {
    const problem = await checkProblemExists(id);
    await problem.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const deleteProblem = async (id) => {
  try {
    const problem = await checkProblemExists(id);
    await problem.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const checkProblemExists = async (id) => {
  const problem = await models.problem.findOne({ where: { id } });
  if (!problem) {
    throw new CustomError({ message: "Problem not exists" });
  }
  return problem;
};

module.exports = {
  getAllProblems,
  createProblem,
  updateProblem,
  deleteProblem,
  checkProblemExists,
  getAllCountProblems,
};
