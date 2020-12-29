const models = require("../models/index");

const getAllHandleFlowers = async () => {
  return await models.handleFlower.scope("ms1").findAll({
    include: {
      model: models.genusFeature,
      attributes: ["name"],
    },
  });
};

const getHandleFlower = async (input) => {
  return await models.handleFlower.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestHandleFlowers = async (input) => {
  return await models.handleFlower.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createHandleFlower = async (input) => {
  await models.handleFlower.create({ ...input });
};
const deleteHandleFlower = async (id) => {
  try {
    const handleFlower = await checkHandleFlowerExists(id);
    await handleFlower.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateHandleFlower = async (input) => {
  const { id } = input;
  try {
    const handleFlower = await checkHandleFlowerExists(id);
    await handleFlower.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkHandleFlowerExists = async (id) => {
  const handleFlower = await models.handleFlower.findOne({ where: { id } });
  if (!handleFlower) {
    throw new CustomError({ message: "HandleFlower not exists" });
  }
  return handleFlower;
};

module.exports = {
  getAllHandleFlowers,
  getHandleFlower,
  getLastestHandleFlowers,
  createHandleFlower,
  deleteHandleFlower,
  updateHandleFlower,
  checkHandleFlowerExists,
};
