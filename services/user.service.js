const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllUsers = async () => {
  return await models.user.findAll({
    include: {
      model: models.userType,
      attributes: ["name"],
    },
  });
};

const createUsers = async (input) => {
  await models.user.create({ ...input });
};

const updateUser = async (input) => {
  const { id } = input;
  try {
    const user = await checkUserExists(id);
    await user.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkUserExists = async (id) => {
  const user = await models.user.findOne({ where: { id } });
  if (!user) {
    throw new CustomError({ message: "Post not exists" });
  }
  return user;
};

module.exports = {
  getAllUsers,
  createUsers,
  updateUser,
  checkUserExists,
};
