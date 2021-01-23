const models = require("../models/index");
const { Sequelize, sequelize } = models;
const CustomError = require("../common/libs/custom-error");

const getAllEpidemicHistories = async () => {
  return await models.epidemicHistory.findAll({
    where: { isActive: true },
  });
};

const getAllEpidemicHistoriesByUID = async (userId) => {
  return await models.epidemicHistory.findAll({
    include: [
      {
        model: models.plant,
        attributes: ["genusFeatureId", "householdId"],
        include: [
          {
            model: models.genusFeature,
            attributes: ["name"],
          },
          {
            model: models.household,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.epidemic,
        attributes: ["name"],
      },
    ],
    where: {
      isActive: true,
      "$plant.household.user_id$": userId,
    },
    order: [["updatedAt", "DESC"]],
  });
};

const getLastestEpidemicHistory = async () => {
  return await models.epidemicHistory.findOne({
    include: [
      {
        model: models.plant,
        attributes: ["genusFeatureId", "householdId"],
        include: [
          {
            model: models.household,
            attributes: ["provinceId", "name"],
            include: {
              model: models.province,
              attributes: ["provinceName"],
            },
          },
          {
            model: models.genusFeature,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.epidemic,
        attributes: ["name"],
      },
    ],
    where: { isActive: true, status: true },
    order: [["createdAt", "DESC"]],
  });
};

const getAllCountEpidemics = async () => {
  const [results] = await sequelize.query(
    `select count(*) as count, 
    public.provinces.province_name as province,
    public.provinces.latitude as lat,
    public.provinces.longitude as lon, 
    public.epidemics.name
    from public.epidemic_histories,
         public.epidemics,
         public.plants,
         public.households,
         public.provinces
    where public.epidemic_histories.epidemic_id = public.epidemics.id
    and public.epidemic_histories.plant_id = public.plants.id
    and public.plants.household_id = public.households.id
    and public.households.province_id = public.provinces.id 
    and public.epidemic_histories.status = true
    group by public.provinces.province_name,
    public.epidemics.name,
    public.provinces.latitude,
    public.provinces.longitude
  `
  );
  return results;
};

const getEpidemicHistory = async (input) => {
  return await models.epidemicHistory.scope("ms1").findOne({
    where: { id: input },
  });
};

const createEpidemicHistory = async (input) => {
  await models.epidemicHistory.create({ ...input });
};

const deleteEpidemicHistory = async (input) => {
  const { plantId, epidemicId } = input;
  try {
    const epidemicHistory = await checkEpidemicHistoryExists(
      plantId,
      epidemicId
    );
    await epidemicHistory.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const deleteEpidemicHistoryByPID = async (plantId) => {
  try {
    await models.epidemicHistory.update(
      { isActive: false },
      {
        where: {
          plantId,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

const updateEpidemicHistory = async (input) => {
  const { plantId, epidemicId } = input;
  try {
    const epidemicHistory = await checkEpidemicHistoryExists(
      plantId,
      epidemicId
    );
    await epidemicHistory.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkEpidemicHistoryExists = async (plantId, epidemicId) => {
  const epidemicHistory = await models.epidemicHistory.findOne({
    where: { plantId, epidemicId },
  });
  if (!epidemicHistory) {
    throw new CustomError({ message: "EpidemicHistory not exists" });
  }
  return epidemicHistory;
};

module.exports = {
  getAllEpidemicHistories,
  getEpidemicHistory,
  getLastestEpidemicHistory,
  checkEpidemicHistoryExists,
  updateEpidemicHistory,
  deleteEpidemicHistory,
  createEpidemicHistory,
  getAllCountEpidemics,
  getAllEpidemicHistoriesByUID,
  deleteEpidemicHistoryByPID,
};
