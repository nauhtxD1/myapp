const models = require("../models/index");

const getAllPosts = async () => {
  return await models.post.findAll();
};

const createPost = async (input) => {
  try {
    await models.post.create({ ...input });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
};
