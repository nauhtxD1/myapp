const models = require("../models/index");

const getProvinceById = async (id) => {
  return await models.province.findOne({
    where: { id: id, isActive: true },
  });
};

module.exports = {
  getProvinceById,
};
