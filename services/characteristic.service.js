const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllCharacteristics = async () => {
  return await models.characteristic.scope("ms1").findAll({
    include: {
      model: models.genusFeature,
      attributes: ["name"],
    },
  });
};

const getAllCharacteristicsByGFID = async (genusFeatureId) => {
  return await models.characteristic.scope("ms1").findAll({
    where: { genusFeatureId },
    order: [["id", "ASC"]],
  });
};

const getCharacteristic = async (input) => {
  return await models.characteristic.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestCharacteristics = async (input) => {
  return await models.characteristic.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createCharacteristic = async (input) => {
  await models.characteristic.create({ ...input });
};
const deleteCharacteristic = async (id) => {
  try {
    const characteristic = await checkCharacteristicExists(id);
    await characteristic.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateCharacteristic = async (input) => {
  const { id } = input;
  try {
    const characteristic = await checkCharacteristicExists(id);
    await characteristic.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkCharacteristicExists = async (id) => {
  const characteristic = await models.characteristic.findOne({ where: { id } });
  if (!characteristic) {
    throw new CustomError({ message: "Characteristic not exists" });
  }
  return characteristic;
};

module.exports = {
  getAllCharacteristics,
  getCharacteristic,
  getLastestCharacteristics,
  createCharacteristic,
  deleteCharacteristic,
  updateCharacteristic,
  checkCharacteristicExists,
  getAllCharacteristicsByGFID,
};
