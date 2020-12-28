const express = require("express");

const response = require("../common/libs/response");
const genusFeatureServices = require("../services/genusFeature.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await genusFeatureServices.getAllGenusFeatures();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await genusFeatureServices.getGenusFeatureById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await genusFeatureServices.createGenusFeature(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
