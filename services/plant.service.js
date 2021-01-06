const { sequelize } = require("../models/index");
const models = require("../models/index");

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

const findAllPlant = async (id) => {
  attributes: [[sequelize.fn("count", sequelize.col("id"))]];
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
    where: { isActive: true },
  });
};

const getLand = async (input) => {
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
  getLand,
  findAllPlant,
};
