const models = require("../models/index");

const getCategories = async (input) => {
  return await models.category.findAll();
};

module.exports = {
  getCategories,
};
