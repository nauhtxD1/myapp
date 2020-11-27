const models = require("../models/index");

const getAllSubcategories = async () => {
  return await models.subcategory.findAll();
};

const createSubcategory = async (input) => {
  return await models.subcategory.create({ ...input });
};

module.exports = {
  getAllSubcategories,
  createSubcategory,
};
