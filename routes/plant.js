const express = require("express");

const response = require("../common/libs/response");
const plantServices = require("../services/plant.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await plantServices.getAllPlants();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.householdId;
    const output = await plantServices.getAllPlantsByHID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
