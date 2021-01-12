const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllUserTypes = async () => {
  return await models.userType.findAll();
};

const createUserType = async (input) => {
  return await models.userType.create({ ...input });
};

const checkTokenAdmin = async (token) => {
  const type = await models.userType.findOne({
    where: { token },
  });
  if (!type.name.toLowerCase().includes("admin")) {
    throw new CustomError({
      message: "Tài khoản không có quyền admin",
    });
  }
  return type;
};

module.exports = {
  getAllUserTypes,
  createUserType,
  checkTokenAdmin,
};
