const express = require("express");

const response = require("../common/libs/response");
const manureServices = require("../services/manure.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await manureServices.getAllManures();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});


router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await manureServices.createManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await manureServices.updateManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await manureServices.deleteManure(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
