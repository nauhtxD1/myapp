const express = require("express");

const response = require("../common/libs/response");
const manureService = require("../services/manure.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await manureService.getAllManures();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await manureService.createManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await manureService.updateManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await manureService.deleteManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});
module.exports = router;
