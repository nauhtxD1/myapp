const models = require("../models/index");

const getAllFamilies = async () => {
  return await models.family.findAll({
    where: { isActive: true },
  });
};

const getFamilyById = async (id) => {
  return await models.family.findOne({
    where: { id: id, isActive: true },
  });
};

const createFamily = async (input) => {
  await models.family.create({ ...input });
};

module.exports = {
  getAllFamilies,
  getFamilyById,
  createFamily,
};
