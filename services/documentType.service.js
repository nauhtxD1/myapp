const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllDocumentTypes = async () => {
  return await models.documentType.findAll({
    where: { isActive: true },
  });
};
const getDocumentType = async (input) => {
  return await models.documentType.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestDocuments = async (input) => {
  return await models.documentType.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createDocumentType = async (input) => {
  await models.documentType.create({ ...input });
};
const deleteDocumentType = async (id) => {
  try {
    const documentType = await checkDocumentTypeExists(id);
    await documentType.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateDocumentType = async (input) => {
  const { id } = input;
  try {
    const documentType = await checkDocumentTypeExists(id);
    await documentType.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkDocumentTypeExists = async (id) => {
  const documentType = await models.documentType.findOne({ where: { id } });
  if (!documentType) {
    throw new CustomError({ message: "DocumentType not exists" });
  }
  return documentType;
};

module.exports = {
  getAllDocumentTypes,
  getDocumentType,
  getLastestDocuments,
  createDocumentType,
  deleteDocumentType,
  updateDocumentType,
  checkDocumentTypeExists,
};
