const models = require("../models/index");
const sequelize = require("sequelize");
const getAllContacts = async () => {
  return await models.contact.scope("ms1").findAll({
    include: [
      {
        model: models.province,
        attributes: ["provinceName", "weatherId", "latitude", "longitude"],
      },
    ],
  });
};

const getHeadquatersContact = async () => {
  return await models.contact.scope("ms1").findOne({
    include: [
      {
        model: models.province,
        attributes: ["latitude", "longitude"],
      },
    ],
    where: { isHeadquarters: true },
  });
};

const getCityList = async () => {
  return await models.contact.scope("ms1").findAll({
    attributes: [],
    include: [
      {
        model: models.province,
        attributes: [
          "provinceName",
          "weatherId",
          "latitude",
          "longitude",
          "geo",
        ],
      },
    ],
  });
};

const createContact = async (input) => {
  await models.contact.create({ ...input });
};

module.exports = {
  getAllContacts,
  getHeadquatersContact,
  getCityList,
  createContact,
};
