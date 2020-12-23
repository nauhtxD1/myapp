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

module.exports = {
  getAllPlantsByHID,
};
