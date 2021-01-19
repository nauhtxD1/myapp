const models = require("../models/index");
const userServices = require("../services/user.service");
const plantServices = require("../services/plant.service");
const { Sequelize, sequelize } = models;
const { Op } = Sequelize;
const moment = require("moment");
const CustomError = require("../common/libs/custom-error");

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
    where: { userId, isActive: true },
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
        attributes: ["username", "password", "email", "phone"],
      },
    ],
    order: [["updatedAt", "DESC"]],
    where: { isActive: true },
  });
};

const getAllCountHouseholds = async () => {
  const all = await models.household.scope("ms1").findAll({
    attributes: [[sequelize.fn("count", sequelize.col("id")), "count"]],
  });
  const lastWeek = await models.household.scope("ms1").findAll({
    attributes: [[sequelize.fn("count", sequelize.col("id")), "count"]],
    where: { updatedAt: { [Op.gte]: moment().subtract(7, "days").toDate() } },
  });
  return { all, lastWeek };
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
  await models.user.create({ ...input.user });
  const lastUser = await userServices.getLastestUser();
  const data = { ...input.household, userId: lastUser.id };
  await models.household.create({ ...data });
};

const deleteHousehold = async (id) => {
  try {
    const household = await checkHouseholdExists(id);
    await household.update({ isActive: false });
    await userServices.deleteUser(household.userId);
    await plantServices.deletePlantsByHID(id);
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
  getAllCountHouseholds,
};
