const models = require("../models/index");

const getAllUserTypes = async () => {
  return await models.userType.findAll();
};

const createUserType = async (input) => {
  return await models.userType.create({ ...input });
};

module.exports = {
  getAllUserTypes,
  createUserType,
};
