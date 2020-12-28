const express = require("express");

const response = require("../common/libs/response");
const pestControlServices = require("../services/pestControl.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await pestControlServices.getAllPestControls();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await pestControlServices.createPestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await pestControlServices.updatePestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await pestControlServices.deletePestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
