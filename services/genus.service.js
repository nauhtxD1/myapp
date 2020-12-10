const models = require("../models/index");

const getAllGenera = async () => {
  return await models.genus.findAll({
    where: { isActive: true },
  });
};

const getGenusById = async (id) => {
  return await models.genus.findOne({
    where: { id: id, isActive: true },
  });
};

const createGenus = async (input) => {
  await models.genus.create({ ...input });
};

module.exports = {
  getAllGenera,
  getGenusById,
  createGenus,
};
