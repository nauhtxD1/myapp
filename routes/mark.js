const express = require("express");

const response = require("../common/libs/response");
const markServices = require("../services/mark.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await markServices.getAllMarks();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
