const models = require("../models/index");

const getAllStatus = async () => {
  return await models.status.findAll({
    where: { isActive: true },
  });
};

const createStatus = async (input) => {
  await models.status.create({ ...input });
};

module.exports = {
  getAllStatus,
  createStatus,
};
