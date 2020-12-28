const express = require("express");

const response = require("../common/libs/response");
const postServices = require("../services/post.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await postServices.getAllPosts();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await postServices.getPost(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/lastest-posts/:limit", async (req, res) => {
  try {
    const input = req.params.limit;
    const output = await postServices.getLastestPosts(input);
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
    const output = await postServices.getLastestPostsBySCID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await postServices.createPost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await postServices.deletePost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await postServices.updatePost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
