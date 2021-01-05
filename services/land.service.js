const models = require("../models/index");

const getAllLands = async () => {
  return await models.land.findAll({
    where: { isActive: true },
  });
};
const getLand = async (input) => {
  return await models.land.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestLands = async (input) => {
  return await models.land.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

// const getLastestLandsBySCID = async (input) => {
//   return await models.manure.findAll({
//     where: { genusFeatureId: input.id },
//     order: [["updatedAt", "DESC"]],
//     limit: input.limit,
//   });
// };

const createLand = async (input) => {
  await models.land.create({ ...input });
};

const deleteLand = async (id) => {
  try {
    const land = await checkLandExists(id);
    await land.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateLand = async (input) => {
  const { id } = input;
  try {
    const land = await checkLandExists(id);
    await land.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkLandExists = async (id) => {
  const land = await models.land.findOne({ where: { id } });
  if (!land) {
    throw new CustomError({ message: "Land not exists" });
  }
  return land;
};
module.exports = {
  getAllLands,
  checkLandExists,
  updateLand,
  deleteLand,
  createLand,
  getLastestLands,
  getLand,
};
