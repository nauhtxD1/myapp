const models = require("../models/index");

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
    where: { isHeadquarters: true },
  });
};

const createContact = async (input) => {
  await models.contact.create({ ...input });
};

module.exports = {
  getAllContacts,
  getHeadquatersContact,
  createContact,
};
