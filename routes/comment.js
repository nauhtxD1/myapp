const express = require("express");

const response = require("../common/libs/response");
const commentService = require("../services/comment.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await commentService.getAllComments();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
