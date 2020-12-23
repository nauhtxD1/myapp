const models = require("../models/index");

const getAllPlantHistories = async (plantId) => {
  return await models.plantHistory.findAll({
    include: {
      model: models.plant,
      attributes: ["age"],
    },
    where: { plantId },
  });
};

module.exports = {
  getAllPlantHistories,
};
