const models = require("../models/index");

const getAllPlantingTechniques = async () => {
  return await models.plantingTechnique.scope("ms1").findAll({
    include: {
      model: models.genusFeature,
      attributes: ["name"],
    },
  });
};
const getPlantingTechnique = async (input) => {
  return await models.plantingTechnique.scope("ms1").findOne({
    where: { id: input },
  });
};
const getLastestPlantingTechnique = async (input) => {
  return await models.plantingTechnique.scope("ms1").findAll({
    order: [["updateAt", "DESC"]],
    limit: input,
  });
};
const createPlantingTechnique = async (input) => {
  await models.plantingTechnique.create({ ...input });
};
const deletePlantingTechnique = async (id) => {
  try {
    const plantingTechnique = await checkPlantingTechniqueExists(id);
    await plantingTechnique.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};
const updatePlantingTechnique = async (input) => {
  const { id } = input;
  try {
    const plantingTechnique = await checkPlantingTechniqueExists(id);
    await plantingTechnique.update({ ...input });
  } catch (e) {
    throw e;
  }
};
const checkPlantingTechniqueExists = async (id) => {
  const plantingTechnique = await models.plantingTechnique.findOne({
    where: { id },
  });
  if (!plantingTechnique) {
    throw new CustomError({ message: "PlantingTechnique not exists" });
  }
  return plantingTechnique;
};
module.exports = {
  checkPlantingTechniqueExists,
  updatePlantingTechnique,
  deletePlantingTechnique,
  createPlantingTechnique,
  getLastestPlantingTechnique,
  getPlantingTechnique,
  getAllPlantingTechniques,
};
