const models = require("../models/index");

const getAllMarks = async () => {
  return await models.mark.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getAllMarks,
};
