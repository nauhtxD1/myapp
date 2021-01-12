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

router.get("/count", async (req, res) => {
  try {
    const output = await epidemicHistoryServices.getAllCountEpidemics();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await epidemicHistoryServices.createEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await epidemicHistoryServices.updateEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await epidemicHistoryServices.deleteEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
