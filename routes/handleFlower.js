const express = require("express");

const response = require("../common/libs/response");
const handleFlowerServices = require("../services/handleFlower.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await handleFlowerServices.getAllHandleFlowers();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await handleFlowerServices.createHandleFlower(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await handleFlowerServices.updateHandleFlower(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await handleFlowerServices.deleteHandleFlower(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
