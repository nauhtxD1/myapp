const models = require("../models/index");

const getAllContacts = async () => {
  return await models.contact.findAll({
    where: { isActive: true },
  });
};

module.exports = {
  getAllContacts,
};
