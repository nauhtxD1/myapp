const models = require("../models/index");

const getAllEpidemicHistories = async () => {
  return await models.epidemicHistory.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getAllEpidemicHistories,
};
