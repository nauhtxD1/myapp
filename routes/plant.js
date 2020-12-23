const express = require("express");

const response = require("../common/libs/response");
const plantService = require("../services/plant.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const input = req.params.householdId;
    const output = await plantService.getAllPlantsByHID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
