const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllUsers = async () => {
  return await models.user.findAll({
    include: {
      model: models.userType,
      attributes: ["name"],
    },
    where: { isActive: true },
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

const deleteUser = async (id) => {
  try {
    const user = await checkUserExists(id);
    await user.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const checkUserExists = async (id) => {
  const user = await models.user.findOne({ where: { id } });
  if (!user) {
    throw new CustomError({ message: "User not exists" });
  }
  return user;
};

const getLoginToken = async (input) => {
  const user = await models.user.findOne({
    include: {
      model: models.userType,
      attributes: ["token"],
    },
    where: { username: input.username, password: input.password },
  });
  if (!user) {
    throw new CustomError({ message: "User not exists or wrong password" });
  }
  return user.userType.dataValues.token;
};

module.exports = {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
  checkUserExists,
  getLoginToken,
};
