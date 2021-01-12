const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllEpidemics = async () => {
  return await models.epidemic.findAll({
    where: { isActive: true },
  });
};

const getEpidemic = async (input) => {
  return await models.epidemic.scope("ms1").findOne({
    where: { id: input },
  });
};

const createEpidemic = async (input) => {
  await models.epidemic.create({ ...input });
};

const deleteEpidemic = async (id) => {
  try {
    const epidemic = await checkEpidemicExists(id);
    await epidemic.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateEpidemic = async (input) => {
  const { id } = input;
  try {
    const epidemic = await checkEpidemicExists(id);
    await epidemic.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkEpidemicExists = async (id) => {
  const epidemic = await models.epidemic.findOne({ where: { id } });
  if (!epidemic) {
    throw new CustomError({ message: "Epidemic not exists" });
  }
  return epidemic;
};

module.exports = {
  getAllEpidemics,
  getEpidemic,
  createEpidemic,
  deleteEpidemic,
  updateEpidemic,
  checkEpidemicExists,
};
