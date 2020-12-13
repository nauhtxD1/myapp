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

module.exports = {
  getAllPosts,
  getPost,
  getLastestPosts,
  getLastestPostsBySCID,
  createPost,
};
