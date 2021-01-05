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

const getAllHouseholds = async () => {
  return await models.household.findAll({
    include: [
      {
        model: models.land,
        attributes: ["name"],
      },
      {
        model: models.province,
        attributes: ["provinceName"],
      },
      {
        model: models.user,
        attributes: ["username"],
      },
    ],
  });
};
const getHousehold = async (input) => {
  return await models.household.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestHouseholds = async (input) => {
  return await models.household.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createHousehold = async (input) => {
  await models.household.create({ ...input });
};

const deleteHousehold = async (id) => {
  try {
    const household = await checkHouseholdExists(id);
    await household.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateHousehold = async (input) => {
  const { id } = input;
  try {
    const household = await checkHouseholdExists(id);
    await household.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkHouseholdExists = async (id) => {
  const household = await models.household.findOne({ where: { id } });
  if (!household) {
    throw new CustomError({ message: "Household not exists" });
  }
  return household;
};

module.exports = {
  getHouseholdByUID,
  getAllHouseholds,
  checkHouseholdExists,
  updateHousehold,
  deleteHousehold,
  createHousehold,
  getLastestHouseholds,
  getHousehold,
};
