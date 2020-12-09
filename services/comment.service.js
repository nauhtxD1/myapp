const models = require("../models/index");

const getAllComments = async () => {
  return await models.comment.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getAllComments,
};
