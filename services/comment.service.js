const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllComments = async () => {
  return await models.comment.findAll({
    where: { isActive: true },
    order: [["createdAt", "DESC"]],
  });
};

const getAllCommentsByPID = async (postId) => {
  return await models.comment.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    where: { postId, isActive: true },
    order: [["createdAt", "DESC"]],
  });
};

const createComment = async (input) => {
  await models.comment.create({ ...input });
};

const deleteComment = async (id) => {
  try {
    const comment = await checkCommentExists(id);
    await comment.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const deleteCommentByPID = async (postId) => {
  try {
    const comment = await models.comment.findAll({ where: { postId } });
    await comment.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const checkCommentExists = async (id) => {
  const comment = await models.comment.findOne({ where: { id } });
  if (!comment) {
    throw new CustomError({ message: "Breeding not exists" });
  }
  return comment;
};

module.exports = {
  getAllComments,
  getAllCommentsByPID,
  createComment,
  deleteComment,
  deleteCommentByPID,
};
