const models = require("../models/index");
const genusServices = require("../services/genus.service");

const getAllFamilies = async () => {
  return await models.family.findAll({
    where: { isActive: true },
  });
};

const getFamilyById = async (id) => {
  const data = await models.family.findOne({
    where: { id: id, isActive: true },
  });
  const genera = await genusServices.getGeneraByFID(id);
  return { data, genera };
};

const createFamily = async (input) => {
  await models.family.create({ ...input });
};

module.exports = {
  getAllFamilies,
  getFamilyById,
  createFamily,
};
