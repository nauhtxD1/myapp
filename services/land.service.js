const models = require("../models/index");

const getAllLands = async () => {
  return await models.land.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getAllLands,
};
