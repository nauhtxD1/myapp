const models = require("../models/index");
const forumPostServices = require("../services/forumPost.service");
const CustomError = require("../common/libs/custom-error");

const getAllUsers = async () => {
  return await models.user.findAll({
    include: {
      model: models.userType,
      attributes: ["name"],
    },
    order: [["updatedAt", "DESC"]],
    where: { isActive: true, userTypeId: 2 },
  });
};

const getLastestUser = async () => {
  return await models.user.findOne({
    order: [["id", "DESC"]],
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
    await forumPostServices.deleteForumPostsByUID(id);
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
  const { username, password } = input;

  const user = await models.user.findOne({
    include: {
      model: models.userType,
      attributes: ["name", "token"],
    },
    where: { username, password },
  });

  if (!user) {
    throw new CustomError({
      message: "Tài khoản không tồn tại hoặc mật khẩu không chính xác",
    });
  } else if (!user.status) {
    throw new CustomError({
      message: "Tài khoản bị vô hiệu hóa",
    });
  }

  return { user, token: user.userType.dataValues.token };
};

module.exports = {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
  checkUserExists,
  getLoginToken,
  getLastestUser,
};
