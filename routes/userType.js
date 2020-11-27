const express = require("express");

const response = require("../common/libs/response");
const userTypesService = require("../services/userType.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await userTypesService.getAllUserTypes();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await userTypesService.createUserType(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
