const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllFields = async () => {
  return await models.field.findAll({
    where: { isActive: true },
  });
};
const getField = async (input) => {
  return await models.field.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestFields = async (input) => {
  return await models.field.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createField = async (input) => {
  await models.field.create({ ...input });
};
const deleteField = async (id) => {
  try {
    const field = await checkFieldExists(id);
    await field.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateField = async (input) => {
  const { id } = input;
  try {
    const field = await checkFieldExists(id);
    await field.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkFieldExists = async (id) => {
  const field = await models.field.findOne({ where: { id } });
  if (!field) {
    throw new CustomError({ message: "Field not exists" });
  }
  return field;
};

module.exports = {
  getAllFields,
  getField,
  getLastestFields,
  createField,
  deleteField,
  updateField,
  checkFieldExists,
};
