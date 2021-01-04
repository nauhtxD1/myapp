const models = require("../models/index");

const getAllComments = async () => {
  return await models.comment.findAll({
    where: { isActive: true },
  });
};

const getAllCommentsByPID = async (postId) => {
  return await models.comment.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    where: { postId, isActive: true },
  });
};

const createComment = async (input) => {
  await models.comment.create({ ...input });
};

module.exports = {
  getAllComments,
  getAllCommentsByPID,
  createComment,
};
