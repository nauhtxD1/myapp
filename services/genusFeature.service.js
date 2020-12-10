const models = require("../models/index");

const getAllGenusFeatures = async () => {
  return await models.genusFeature.findAll({
    where: { isActive: true },
  });
};

const getGenusFeatureById = async (id) => {
  return await models.genusFeature.findOne({
    where: { id: id, isActive: true },
  });
};

const createGenusFeature = async (input) => {
  await models.genusFeature.create({ ...input });
};

module.exports = {
  getAllGenusFeatures,
  getGenusFeatureById,
  createGenusFeature,
};
