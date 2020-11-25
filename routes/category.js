const express = require("express");

const response = require("../common/libs/response");
const categoryService = require("../services/category.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const input = req.body;
    const output = categoryService.getCategories(input);

    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
