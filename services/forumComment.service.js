const models = require("../models/index");
const forumPostServices = require("../services/forumPost.service");
const CustomError = require("../common/libs/custom-error");

const getAllForumComments = async () => {
  return await models.forumComment.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    where: { isActive: true },
  });
};

const getAllForumCommentsByFPID = async (forumPostId) => {
  return await models.forumComment.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    order: [["updatedAt", "DESC"]],
    where: { isActive: true, forumPostId },
  });
};

const createForumComment = async (input) => {
  const { forumPostId } = input;
  await forumPostServices.increaseReply(forumPostId);
  await models.forumComment.create({ ...input });
};

const deleteForumComment = async (id) => {
  try {
    const forumComment = await checkForumCommentExists(id);
    await forumComment.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updateForumComment = async (input) => {
  const { id } = input;
  try {
    const forumComment = await checkForumCommentExists(id);
    await forumComment.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkForumCommentExists = async (id) => {
  const forumComment = await models.forumComment.findOne({ where: { id } });
  if (!forumComment) {
    throw new CustomError({ message: "ForumComment not exists" });
  }
  return forumComment;
};

module.exports = {
  getAllForumComments,
  getAllForumCommentsByFPID,
  createForumComment,
  deleteForumComment,
  updateForumComment,
  checkForumCommentExists,
};
