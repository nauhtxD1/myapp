const models = require("../models/index");
const sequelize = require("sequelize");
const getAllEpidemicHistories = async () => {
  return await models.epidemicHistory.findAll({
    where: { isActive: true },
  });
};

const getAllCountEpidemics = async () => {
  return await models.epidemicHistory.findAll({
    include: [
      {
        model: models.plantHistory,
        include: {
          model: models.plant,
          include: {
            model: models.household,
            include: {
              model: models.province,
              attributes: ["provinceName"],
              group: ["provinceName"],
            },
          },
        },
      },
      {
        model: models.epidemic,
        attributes: ["name"],
      },
    ],
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("epidemic.name")), "number"],
    ],

    where: { isActive: true, status: true },
  });
};

module.exports = {
  getAllEpidemicHistories,
  getAllCountEpidemics,
};
