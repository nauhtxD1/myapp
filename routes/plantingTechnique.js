const express = require("express");

const response = require("../common/libs/response");
const plantingTechniqueServices = require("../services/plantingTechnique.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await plantingTechniqueServices.getAllPlantingTechniques();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await plantingTechniqueServices.createPlantingTechnique(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await plantingTechniqueServices.updatePlantingTechnique(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await plantingTechniqueServices.deletePlantingTechnique(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
