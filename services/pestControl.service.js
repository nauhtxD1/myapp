const models = require("../models/index");

const getAllPestControls = async () => {
  return await models.pestControl.scope("ms1").findAll({
    include: [
      {
        model: models.genusFeature,
        attributes: ["name"],
      },
      {
        model: models.epidemic,
        attributes: ["name"],
      },
    ],
  });
};

const getPestControl = async (input) => {
  return await models.pestControl.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestPestControls = async (input) => {
  return await models.pestControl.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

// const getLastestPestControlByPCID = async (input) => {
//   return await models.pestControl.findAll({
//     where: { genusFeatureId: input.id },
//     order: [["updatedAt", "DESC"]],
//     limit: input.limit,
//   });
// };

const createPestControl = async (input) => {
  await models.pestControl.create({ ...input });
};
const deletePestControl = async (id) => {
  try {
    const pestControl = await checkPestControlExists(id);
    awaitpestControl.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updatePestControl = async (input) => {
  const { id } = input;
  try {
    const pestControl = await checkPestControlExists(id);
    await pestControl.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkPestControlExists = async (id) => {
  const pestControl = await models.pestControl.findOne({ where: { id } });
  if (!pestControl) {
    throw new CustomError({ message: "PestControl not exists" });
  }
  return pestControl;
};

module.exports = {
  getAllPestControls,
  getPestControl,
  getLastestPestControls,
  //   getLastestPestControlByPCID,
  createPestControl,
  deletePestControl,
  updatePestControl,
  checkPestControlExists,
};
