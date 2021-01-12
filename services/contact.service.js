const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

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
        attributes: ["weatherId", "geo"],
      },
    ],
  });
};

const getPosGeo = async () => {
  return await models.contact.scope("ms1").findAll({
    attributes: [],
    include: [
      {
        model: models.province,
        attributes: ["latitude", "longitude", "geo"],
      },
    ],
  });
};

const createContact = async (input) => {
  await models.contact.create({ ...input });
};

const deleteContact = async (id) => {
  try {
    const contact = await checkContactExists(id);
    await contact.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};
const updateContact = async (input) => {
  try {
    const contact = await checkContactExists(id);
    await contact.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkContactExists = async (id) => {
  const contact = await models.contact.findOne({ where: { id } });
  if (!contact) {
    throw new CustomError({ message: "Contact not exists" });
  }
  return contact;
};
module.exports = {
  getAllContacts,
  getHeadquatersContact,
  getCityList,
  getPosGeo,
  createContact,
  deleteContact,
  updateContact,
  checkContactExists,
};
