const express = require("express");

const response = require("../common/libs/response");
const userTypesServices = require("../services/userType.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await userTypesServices.getAllUserTypes();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await userTypesServices.createUserType(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
