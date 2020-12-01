const models = require("../models/index");

const getAllSubcategories = async () => {
  return await models.subcategory.findAll();
};

const getSubcategoriesByCID = async (input) => {
  const { id } = input;
  return await models.subcategory.findAll(
    {
      where: { id },
    }
  );
};

const createSubcategory = async (input) => {
  return await models.subcategory.create({ ...input });
}; 

module.exports = {
  getAllSubcategories,
  createSubcategory,
};
