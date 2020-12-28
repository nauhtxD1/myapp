const express = require("express");

const response = require("../common/libs/response");
const genusFeatureService = require("../services/genusFeature.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await genusFeatureService.getAllGenusFeatures();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await genusFeatureService.getGenusFeatureById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await genusFeatureService.createGenusFeature(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
