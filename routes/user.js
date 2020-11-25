const express = require("express");

const response = require("../common/libs/response");
const userService = require("../services/user.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const input = req.body;
    const output = await userService.getUsers(input);

    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    //const input = req.body;
    const input = {
      idtk: "vtt1",
      matkhau: "vtt1",
      email: "vtt1@gmail.com",
      sdt: "0123456789",
      trangthai: false,
      idlu: 1,
    };
    await userService.createUsers(input);

    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
