const express = require("express");

const response = require("../common/libs/response");
const subcategoryServices = require("../services/subcategory.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await subcategoryServices.getAllSubcategories();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const input = req.params.categoryId;
    const output = await subcategoryServices.getSubcategoriesByCID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/sub/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await subcategoryServices.getSubcategoriesByID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await subcategoryServices.createSubcategory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
