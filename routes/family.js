const express = require("express");

const response = require("../common/libs/response");
const familyService = require("../services/family.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await familyService.getAllFamilies();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await familyService.getFamilyById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await familyService.createFamily(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
