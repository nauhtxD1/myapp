const models = require("../models/index");
const sequelize = require("sequelize");

const getAllEpidemicHistories = async () => {
  return await models.epidemicHistory.findAll({
    where: { isActive: true },
  });
};

const getAllCountEpidemics = async () => {
  return await models.epidemicHistory.findAll({
    include: [
      {
        model: models.plantHistory,
        include: {
          model: models.plant,
          include: {
            model: models.household,
            include: {
              model: models.province,
              attributes: ["provinceName"],
              group: ["provinceName"],
            },
          },
        },
      },
      {
        model: models.epidemic,
        attributes: ["name"],
      },
    ],
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("epidemic.name")), "number"],
    ],

    where: { isActive: true, status: true },
  });
};

const getEpidemicHistory = async (input) => {
  return await models.epidemicHistory.scope("ms1").findOne({
    where: { id: input },
  });
};

const createEpidemicHistory = async (input) => {
  await models.epidemicHistory.create({ ...input });
};

const deleteEpidemicHistory = async (id) => {
  try {
    const epidemicHistory = await checkEpidemicHistoryExists(id);
    await epidemicHistory.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateEpidemicHistory = async (input) => {
  const { id } = input;
  try {
    const epidemicHistory = await checkEpidemicHistoryExists(id);
    await epidemicHistory.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkEpidemicHistoryExists = async (id) => {
  const epidemicHistory = await models.epidemicHistory.findOne({
    where: { id },
  });
  if (!epidemicHistory) {
    throw new CustomError({ message: "EpidemicHistory not exists" });
  }
  return epidemicHistory;
};

module.exports = {
  getAllEpidemicHistories,
  getEpidemicHistory,
  checkEpidemicHistoryExists,
  updateEpidemicHistory,
  deleteEpidemicHistory,
  createEpidemicHistory,
  getAllCountEpidemics,
};
