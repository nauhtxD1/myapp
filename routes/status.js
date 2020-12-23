const express = require("express");

const response = require("../common/libs/response");
const statusService = require("../services/status.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await statusService.getAllStatus();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await statusService.createStatus(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
