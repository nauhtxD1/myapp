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

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await postService.getPost(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/lastest-posts/:limit", async (req, res) => {
  try {
    const input = req.params.limit;
    const output = await postService.getLastestPosts(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:subId/:limit", async (req, res) => {
  try {
    const input = {
      subId: req.params.subId,
      limit: req.params.limit,
    };
    const output = await postService.getLastestPostsBySCID(input);
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

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await postService.deletePost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await postService.updatePost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
