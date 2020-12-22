const models = require("../models/index");

const getAllSubcategories = async () => {
  return await models.subcategory.findAll({
    where: { isActive: true },
    order: [["id", "ASC"]],
  });
};

const getSubcategoriesByCID = async (categoryId) => {
  return await models.subcategory.findAll({
    where: { categoryId: categoryId, isActive: true },
    order: [["id", "ASC"]],
  });
};

const getSubcategoriesByID = async (id) => {
  return await models.subcategory.findOne({
    include: {
      model: models.category,
      attributes: ["name"],
    },
    where: { id },
  });
};

const createSubcategory = async (input) => {
  return await models.subcategory.create({ ...input });
};

module.exports = {
  getAllSubcategories,
  createSubcategory,
  getSubcategoriesByCID,
  getSubcategoriesByID,
};
