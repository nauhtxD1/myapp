const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllBreedings = async () => {
  return await models.breeding.scope("ms1").findAll({
    include: {
      model: models.genusFeature,
      attributes: ["name"],
    },
  });
};

const getAllBreedingsByGFID = async (genusFeatureId) => {
  return await models.breeding.scope("ms1").findAll({
    where: { genusFeatureId },
    order: [["id", "ASC"]],
  });
};

const getBreeding = async (input) => {
  return await models.breeding.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestBreedings = async (input) => {
  return await models.breeding.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createBreeding = async (input) => {
  await models.breeding.create({ ...input });
};
const deleteBreeding = async (id) => {
  try {
    const breeding = await checkBreedingExists(id);
    await breeding.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateBreeding = async (input) => {
  const { id } = input;
  try {
    const breeding = await checkBreedingExists(id);
    await breeding.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkBreedingExists = async (id) => {
  const breeding = await models.breeding.findOne({ where: { id } });
  if (!breeding) {
    throw new CustomError({ message: "Breeding not exists" });
  }
  return breeding;
};

module.exports = {
  getAllBreedings,
  getBreeding,
  getLastestBreedings,
  createBreeding,
  deleteBreeding,
  updateBreeding,
  checkBreedingExists,
  getAllBreedingsByGFID,
};
