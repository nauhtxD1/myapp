const express = require("express");

const response = require("../common/libs/response");
const categoryService = require("../services/category.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await categoryService.getAllCategories();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await categoryService.createCategory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
