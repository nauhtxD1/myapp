const models = require("../models/index");

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
    where: { isActive: true },
  });
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
    await problem.update({ isActive: false }, { where: id });
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
};
