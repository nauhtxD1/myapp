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

router.get("/user/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await epidemicHistoryServices.getAllEpidemicHistoriesByUID(
      input
    );
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

router.put("/update/:plantId/:epidemicId", async (req, res) => {
  try {
    const input = {
      ...req.body,
      plantId: req.params.plantId,
      epidemicId: req.params.epidemicId,
    };
    await epidemicHistoryServices.updateEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:plantId/:epidemicId", async (req, res) => {
  try {
    const input = {
      plantId: req.params.plantId,
      epidemicId: req.params.epidemicId,
    };
    await epidemicHistoryServices.deleteEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
