const express = require("express");

const response = require("../common/libs/response");
const characteristicServices = require("../services/characteristic.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await characteristicServices.getAllCharacteristics();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await characteristicServices.createCharacteristic(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await characteristicServices.updateCharacteristic(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await characteristicServices.deleteCharacteristic(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
