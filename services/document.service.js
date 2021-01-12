const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllDocuments = async () => {
  return await models.document.scope("ms1").findAll({
    include: [
      {
        model: models.documentType,
        attributes: ["name"],
      },
      {
        model: models.contact,
        attributes: ["name"],
      },
      {
        model: models.field,
        attributes: ["name"],
      },
    ],
  });
};

const getDocument = async (input) => {
  return await models.document.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestDocuments = async (input) => {
  return await models.document.findAll({
    where: {isActive: true},
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const createDocument = async (input) => {
  await models.document.create({ ...input });
};

const deleteDocument = async (id) => {
  try {
    const document = await checkDocumentExists(id);
    await document.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateDocument = async (input) => {
  const { id } = input;
  try {
    const document = await checkDocumentExists(id);
    await document.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkDocumentExists = async (id) => {
  const document = await models.document.findOne({ where: { id } });
  if (!document) {
    throw new CustomError({ message: "Document not exists" });
  }
  return document;
};

module.exports = {
  getAllDocuments,
  getDocument,
  getLastestDocuments,
  createDocument,
  deleteDocument,
  updateDocument,
  checkDocumentExists,
};
