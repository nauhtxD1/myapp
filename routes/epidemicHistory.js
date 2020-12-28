const express = require("express");

const response = require("../common/libs/response");
const epidemicHistoryServices = require("../services//epidemicHistory.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await epidemicHistoryServices.getAllEpidemicHistories();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
