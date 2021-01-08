const express = require("express");

const response = require("../common/libs/response");
const breedingServices = require("../services/breeding.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await breedingServices.getAllBreedings();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await breedingServices.createBreeding(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await breedingServices.updateBreeding(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await breedingServices.deleteBreeding(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
