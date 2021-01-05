const express = require("express");

const response = require("../common/libs/response");
const commentServices = require("../services/comment.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await commentServices.getAllComments();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const input = req.params.postId;
    const output = await commentServices.getAllCommentsByPID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = {
      content: 'test comment 1',
      postId: 3,
      userId: 1
    };
    await commentServices.createComment(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
