const express = require("express");

const response = require("../common/libs/response");
const landServices = require("../services/land.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await landServices.getAllLands();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});
router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await landServices.createLand(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await landServices.updateLand(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await landServices.deleteLand(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});
module.exports = router;
