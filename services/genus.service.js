const models = require("../models/index");
const genusFeatureServices = require("../services/genusFeature.service");

const getAllGenera = async () => {
  return await models.genus.findAll({
    where: { isActive: true },
  });
};

const getGeneraByFID = async (familyId) => {
  return await models.genus.findAll({
    where: { isActive: true, familyId },
    order: [["id", "ASC"]],
  });
};

const getGenusById = async (id) => {
  const data = await models.genus.findOne({
    where: { id: id, isActive: true },
  });
  const genusFeatures = await genusFeatureServices.getGenusFeaturesByGID(id);

  return { data, genusFeatures };
};

const createGenus = async (input) => {
  await models.genus.create({ ...input });
};

module.exports = {
  getAllGenera,
  getGenusById,
  createGenus,
  getGeneraByFID,
};
