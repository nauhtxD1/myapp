const express = require("express");

const response = require("../common/libs/response");
const epidemicServices = require("../services/epidemic.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await epidemicServices.getAllEpidemics();
    response.success(res, output);
  } catch (e) {
    response.fail(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await epidemicServices.createEpidemic(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
