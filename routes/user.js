const express = require("express");

const response = require("../common/libs/response");
const userService = require("../services/user.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await userService.getAllUsers();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await userService.createUsers(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
