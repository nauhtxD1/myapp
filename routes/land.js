const express = require("express");

const response = require("../common/libs/response");
const landService = require("../services/land.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await landService.getAllLands();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
