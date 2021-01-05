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

const getAllPlants = async () => {
  return await models.plant.findAll();
};

module.exports = {
  getAllPlantsByHID,
  getAllPlants,
};
