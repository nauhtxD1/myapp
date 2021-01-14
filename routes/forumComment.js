const express = require("express");

const response = require("../common/libs/response");
const forumCommentServices = require("../services/forumComment.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await forumCommentServices.getAllForumComments();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:forumPostId", async (req, res) => {
  try {
    const input = req.params.forumPostId;
    const output = await forumCommentServices.getAllForumCommentsByFPID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await forumCommentServices.createForumComment(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
