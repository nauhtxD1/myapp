const express = require("express");

const response = require("../common/libs/response");
const householdServices = require("../services/household.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await householdServices.getAllHouseholds();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.userId;
    const output = await householdServices.getHouseholdByUID(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});
router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await householdServices.createHousehold(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await householdServices.updateHousehold(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await householdServices.deleteHousehold(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});
module.exports = router;
