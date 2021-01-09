const models = require("../models/index");

const getAllPosts = async () => {
  return await models.post.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
  });
};

const getPost = async (id) => {
  increaseView(id);
  return await models.post.scope("ms1").findOne({
    where: { id },
  });
};

const getLastestPosts = async () => {
  return await models.post.scope("ms1").findAll({
    include: {
      model: models.subcategory,
      attributes: ["name"],
    },
    order: [["publishAt", "DESC"]],
  });
};

const getLastestPostsBySCID = async (input) => {
  return await models.post.findAll({
    where: { subcategoryId: input.subId },
    order: [["publishAt", "DESC"]],
    limit: input.limit,
  });
};

const getPostsBySCID = async (subcategoryId) => {
  return await models.post.findAll({
    include: {
      model: models.subcategory,
      attributes: ["name"],
    },
    where: { subcategoryId },
    order: [["publishAt", "DESC"]],
  });
};

const createPost = async (input) => {
  await models.post.create({ ...input });
};

const deletePost = async (id) => {
  try {
    const post = await checkPostExists(id);
    await post.update({ isActive: false });
  } catch (e) {
    throw e;
  }
};

const updatePost = async (input) => {
  const { id } = input;
  try {
    const post = await checkPostExists(id);
    await post.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkPostExists = async (id) => {
  const post = await models.post.findOne({ where: { id } });
  if (!post) {
    throw new CustomError({ message: "Post not exists" });
  }
  return post;
};

const increaseView = async (id) => {
  await models.post.increment({ view: +1 }, { where: { id } });
};

module.exports = {
  getAllPosts,
  getPost,
  getLastestPosts,
  getLastestPostsBySCID,
  createPost,
  deletePost,
  updatePost,
  checkPostExists,
  increaseView,
  getPostsBySCID,
};
