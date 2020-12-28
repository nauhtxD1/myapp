const express = require("express");

const response = require("../common/libs/response");
const provinceService = require("../services/province.service");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await provinceService.getProvinceById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/", async (req, res) => {
  try {
    const output = await provinceService.getAllProvinces();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
