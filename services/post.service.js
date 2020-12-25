const models = require("../models/index");

const getAllPosts = async () => {
  return await models.post.scope("ms1").findAll();
};

const getPost = async (input) => {
  return await models.post.scope("ms1").findOne({
    where: { id: input },
  });
};

const getLastestPosts = async (input) => {
  return await models.post.scope("ms1").findAll({
    order: [["updatedAt", "DESC"]],
    limit: input,
  });
};

const getLastestPostsBySCID = async (input) => {
  return await models.post.findAll({
    where: { subcategoryId: input.id },
    order: [["updatedAt", "DESC"]],
    limit: input.limit,
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

module.exports = {
  getAllPosts,
  getPost,
  getLastestPosts,
  getLastestPostsBySCID,
  createPost,
  deletePost,
  updatePost,
  checkPostExists,
};
