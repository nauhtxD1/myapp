const express = require("express");

const response = require("../common/libs/response");
const plantHistoryServices = require("../services/plantHistory.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const input = req.params.plantId;
    const output = await plantHistoryServices.getAllPlantHistories(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
