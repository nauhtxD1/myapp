const express = require("express");

const response = require("../common/libs/response");
const fieldService = require("../services/field.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await fieldService.getAllFields();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await fieldService.createField(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
