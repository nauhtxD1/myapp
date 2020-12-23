const models = require("../models/index");

const getHouseholdByUID = async (userId) => {
  return await models.household.findOne({
    include: [
      {
        model: models.land,
        attributes: ["name"],
      },
      {
        model: models.province,
        attributes: ["provinceName"],
      },
    ],
    where: { userId },
  });
};

module.exports = {
  getHouseholdByUID,
};
