const models = require("../models/index");

const getAllPosts = () => {
    return await models.post.findAll();
};

const createPost = (input) => {
    await models.post.create({...input});
};

module.exports = {
    getAllPosts,
    createPost,
};