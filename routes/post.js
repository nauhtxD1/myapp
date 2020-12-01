const express = require("express");

const response = require("../common/libs/response");
const postService = require("../services/post.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await postService.getAllPosts();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await postService.createPost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
