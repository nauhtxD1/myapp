const express = require("express");

const response = require("../common/libs/response");
const subcategoryService = require("../services/subcategory.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await subcategoryService.getAllSubcategories();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const input = req.params.categoryId;
    const output = await subcategoryService.getSubcategoriesByCID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/sub/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await subcategoryService.getSubcategoriesByID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await subcategoryService.createSubcategory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
