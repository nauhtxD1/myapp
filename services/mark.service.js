const models = require("../models/index");

const getAllMarks = async () => {
  return await models.mark.findAll({
    include: [
      {
        model: models.contact,
        attributes: ["name"],
      },
    ],
    where: { isActive: true },
  });
};

const createMark = async (input) => {
  await models.mark.create({ ...input });
};

const updateMark = async (input) => {
  const { id } = input;
  try {
    const mark = await checkMarkExists(id);
    await mark.update("...input");
  } catch (e) {
    throw e;
  }
};
const deleteMark = async (id) => {
  try {
    const mark = await checkMarkExists(id);
    await mark.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};
const checkMarkExists = async (id) => {
  const mark = await models.mark.findOne({ where: { id } });
  if (!mark) {
    throw new CustomError({ message: "Mark not exists" });
  }
  return mark;
};

module.exports = {
  getAllMarks,
  createMark,
  updateMark,
  deleteMark,
};
