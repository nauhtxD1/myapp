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

router.get("/:householdId", async (req, res) => {
  try {
    const input = req.params.householdId;
    const output = await plantServices.getAllPlantsByHID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await plantServices.getAllPlantsByUID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await plantServices.createPlant(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await plantServices.updatePlant(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await plantServices.deletePlant(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
