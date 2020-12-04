const models = require("../models/index");

const getAllContacts = async () => {
  return await models.contact.findAll({
    where: { isActive: true },
  });
};

const getHeadquatersContact = async () => {
  return await models.contact.findOne({
    where: { isActive: true, isHeadquarters: true },
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
