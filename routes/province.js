const express = require("express");

const response = require("../common/libs/response");
const provinceServices = require("../services/province.service");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await provinceServices.getProvinceById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/", async (req, res) => {
  try {
    const output = await provinceServices.getAllProvinces();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
