const models = require("../models/index");

const getAllPosts = async () => {
  return await models.post.findAll({
    include: [
      {
        model: models.subcategory,
        attributes: ["name"],
      },
    ],
  });
};

const getPost = async (input) => {
  return await models.post.findOne({
    include: [
      {
        model: models.subcategory,
        attributes: ["name"],
      },
    ],
    where: { id: input },
  });
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
  getPost,
};
