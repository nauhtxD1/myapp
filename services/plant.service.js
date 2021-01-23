const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");
const epidemicHistoryServices = require("../services/epidemicHistory.service");

const getAllPlantsByHID = async (householdId) => {
  return await models.plant.findAll({
    include: [
      {
        model: models.household,
        attributes: ["name"],
      },
      {
        model: models.genusFeature,
        attributes: ["name"],
      },
    ],
    where: { householdId },
  });
};

const getAllPlantsByUID = async (userId) => {
  return await models.plant.findAll({
    include: [
      {
        model: models.household,
        attributes: ["name"],
      },
      {
        model: models.genusFeature,
        attributes: ["name"],
      },
    ],
    where: { isActive: true, "$household.user_id$": userId },
    order: [["updatedAt", "DESC"]],
  });
};

const getAllPlants = async () => {
  return await models.plant.findAll({
    include: [
      {
        model: models.household,
        attributes: ["name"],
      },
      {
        model: models.genusFeature,
        attributes: ["name"],
      },
    ],
    order: [["updatedAt", "DESC"]],
    where: { isActive: true },
  });
};

const getPlant = async (input) => {
  return await models.plant.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestPlants = async (input) => {
  return await models.plant.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createPlant = async (input) => {
  await models.plant.create({ ...input });
};

const deletePlant = async (id) => {
  try {
    const plant = await checkPlantExists(id);
    await plant.update({ isActive: false });
    await epidemicHistoryServices.deleteEpidemicHistoryByPID(id);
  } catch (e) {
    throw e;
  }
};

const deletePlantsByHID = async (householdId) => {
  try {
    await models.plant.update(
      { isActive: false },
      {
        where: {
          householdId,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

const updatePlant = async (input) => {
  const { id } = input;
  try {
    const plant = await checkPlantExists(id);
    await plant.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkPlantExists = async (id) => {
  const plant = await models.plant.findOne({ where: { id } });
  if (!plant) {
    throw new CustomError({ message: "Plant not exists" });
  }
  return plant;
};

module.exports = {
  getAllPlantsByHID,
  getAllPlants,
  checkPlantExists,
  updatePlant,
  deletePlant,
  createPlant,
  getLastestPlants,
  getPlant,
  deletePlantsByHID,
  getAllPlantsByUID,
};
