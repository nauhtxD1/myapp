const models = require("../models/index");
const breedingServices = require("../services/breeding.service");
const handleFlowerServices = require("../services/handleFlower.service");
const plantingTechniqueServices = require("../services/plantingTechnique.service");
const characteristicServices = require("../services/characteristic.service");
const manuresServices = require("../services/manure.service");
const getAllGenusFeatures = async () => {
  return await models.genusFeature.findAll({
    where: { isActive: true },
  });
};

const getGenusFeatureById = async (id) => {
  const data = await models.genusFeature.findOne({
    where: { id, isActive: true },
  });
  const breedings = await breedingServices.getAllBreedingsByGFID(id);
  const handleFlowers = await handleFlowerServices.getAllHandleFlowersByGFID(
    id
  );
  const plantingTechniques = await plantingTechniqueServices.getAllPlantingTechniquesByGFID(
    id
  );
  const characteristics = await characteristicServices.getAllCharacteristicsByGFID(
    id
  );
  const manures = await manuresServices.getAllManuresByGFID(id);
  return {
    data,
    breedings,
    handleFlowers,
    plantingTechniques,
    characteristics,
    manures,
  };
};

const getGenusFeaturesByGID = async (genusId) => {
  return await models.genusFeature.findAll({
    where: { genusId, isActive: true },
    order: [["id", "ASC"]],
  });
};

const createGenusFeature = async (input) => {
  await models.genusFeature.create({ ...input });
};

module.exports = {
  getAllGenusFeatures,
  getGenusFeatureById,
  createGenusFeature,
  getGenusFeaturesByGID,
};
