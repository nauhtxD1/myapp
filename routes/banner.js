const express = require("express");

const response = require("../common/libs/response");
const bannerServices = require("../services/banner.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await bannerServices.getAllBanners();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await bannerServices.createBanner(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await bannerServices.updateBanner(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
