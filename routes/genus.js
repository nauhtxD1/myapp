const express = require("express");

const response = require("../common/libs/response");
const genusService = require("../services/genus.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await genusService.getAllGenera();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await genusService.getGenusById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await genusService.createGenus(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
