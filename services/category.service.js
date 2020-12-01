const models = require("../models/index");

const getAllCategories = async () => {
  return await models.category.findAll({
    where: { isActive: true },
  });
};

const createCategory = async (input) => {
  await models.category.create({ ...input });
};

module.exports = {
  getAllCategories,
  createCategory,
};
