const express = require("express");

const response = require("../common/libs/response");
const householdService = require("../services/household.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const input = req.params.userId;
    const output = await householdService.getHouseholdByUID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
