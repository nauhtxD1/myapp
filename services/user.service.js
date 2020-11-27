const models = require("../models/index");

const getAllUsers = async () => {
  return await models.user.findAll();
};

const createUsers = async (input) => {
  await models.user.create({ ...input });
};

module.exports = {
  getAllUsers,
  createUsers,
};
