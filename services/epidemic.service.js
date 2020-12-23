const models = require("../models/index");

const getAllEpidemics = async () => {
  return await models.epidemic.findAll({
    where: { isActive: true },
  });
};

const createEpidemic = async (input) => {
  await models.epidemic.create({ ...input });
};

module.exports = {
  getAllEpidemics,
  createEpidemic,
};
