const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllManures = async () => {
  return await models.manure.scope("ms1").findAll({
    include: {
      model: models.genusFeature,
      attributes: ["name"],
    },
  });
};

const getManure = async (input) => {
  return await models.manure.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestManures = async (input) => {
  return await models.manure.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const getAllManuresByGFID = async (genusFeatureId) => {
  return await models.manure.findAll({
    where: { genusFeatureId },
    order: [["id", "ASC"]],
  });
};

const createManure = async (input) => {
  await models.manure.create({ ...input });
};

const deleteManure = async (id) => {
  try {
    const manure = await checkManureExists(id);
    await manure.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateManure = async (input) => {
  const { id } = input;
  try {
    const manure = await checkManureExists(id);
    await manure.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkManureExists = async (id) => {
  const manure = await models.manure.findOne({ where: { id } });
  if (!manure) {
    throw new CustomError({ message: "Manure not exists" });
  }
  return manure;
};

module.exports = {
  getAllManures,
  getManure,
  getLastestManures,
  getAllManuresByGFID,
  createManure,
  deleteManure,
  updateManure,
  checkManureExists,
};
