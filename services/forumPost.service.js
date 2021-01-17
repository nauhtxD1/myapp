const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllForumPosts = async () => {
  return await models.forumPost.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    order: [["updatedAt", "DESC"]],
    where: { isActive: true },
  });
};

const getAllForumPostsByUID = async (userId) => {
  return await models.forumPost.findAll({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    order: [["createdAt", "DESC"]],
    where: { isActive: true, userId },
  });
};

const getForumPost = async (id) => {
  increaseView(id);
  return await models.forumPost.findOne({
    include: {
      model: models.user,
      attributes: ["username"],
    },
    where: { id },
  });
};

const createForumPost = async (input) => {
  await models.forumPost.create({ ...input });
};

const deleteForumPost = async (id) => {
  try {
    const forumPost = await checkForumPostExists(id);
    await forumPost.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const deleteForumPostsByUID = async (userId) => {
  try {
    await models.forumPost.update(
      { isActive: false },
      {
        where: {
          userId,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

const updateForumPost = async (input) => {
  const { id } = input;
  try {
    const forumPost = await checkForumPostExists(id);
    await forumPost.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkForumPostExists = async (id) => {
  const forumPost = await models.forumPost.findOne({ where: { id } });
  if (!forumPost) {
    throw new CustomError({ message: "ForumPost not exists" });
  }
  return forumPost;
};

const increaseView = async (id) => {
  await models.forumPost.increment({ views: +1 }, { where: { id } });
};

const increaseReply = async (id) => {
  await models.forumPost.increment({ replies: +1 }, { where: { id } });
};

module.exports = {
  getAllForumPosts,
  getForumPost,
  createForumPost,
  deleteForumPost,
  deleteForumPostsByUID,
  updateForumPost,
  checkForumPostExists,
  increaseView,
  increaseReply,
  getAllForumPostsByUID,
};
