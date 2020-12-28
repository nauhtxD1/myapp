const express = require("express");

const response = require("../common/libs/response");
const userServices = require("../services/user.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await userServices.getAllUsers();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await userServices.updateUser(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await userServices.deleteUser(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = { ...req.body };
    await userServices.createUsers(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
