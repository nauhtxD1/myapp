const models = require("../models/index");

const getAllMarks = async () => {
  return await models.mark.findAll({
    include: [
      {
        model: models.contact,
        attributes: ["name"],
      },
    ],
    where: { isActive: true },
  });
};

const createMark = async (input) => {
  await models.mark.create({ ...input });
};

module.exports = {
  getAllMarks,
  createMark,
};
