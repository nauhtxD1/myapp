const express = require("express");

const response = require("../common/libs/response");
const genusServices = require("../services/genus.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await genusServices.getAllGenera();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await genusServices.getGenusById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await genusServices.createGenus(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
