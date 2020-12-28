const models = require("../models/index");

const getProvinceById = async (id) => {
  return await models.province.findOne({
    where: { id: id, isActive: true },
  });
};

const getAllProvinces = async () => {
  return await models.province.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getProvinceById,
  getAllProvinces,
};
