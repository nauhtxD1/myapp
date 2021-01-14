const express = require("express");

const response = require("../common/libs/response");
const forumPostServices = require("../services/forumPost.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await forumPostServices.getAllForumPosts();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await forumPostServices.getForumPost(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await forumPostServices.createForumPost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await forumPostServices.deleteForumPost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await forumPostServices.updateForumPost(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
