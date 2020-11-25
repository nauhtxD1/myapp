const models = require("../models/index");

const getUsers = async (input) => {
  const users = await models.user.findAll();
  //console.log(users);
  return { users };
};

const createUsers = async (input) => {
  await models.user.create({ ...input });
};

module.exports = {
  getUsers,
  createUsers,
};
