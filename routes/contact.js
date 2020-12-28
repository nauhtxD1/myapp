const express = require("express");

const response = require("../common/libs/response");
const contactServices = require("../services/contact.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await contactServices.getAllContacts();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/headquarters", async (req, res) => {
  try {
    const output = await contactServices.getHeadquatersContact();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/city-list", async (req, res) => {
  try {
    const output = await contactServices.getCityList();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await contactServices.createContact(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await contactServices.deleteContact(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await contactServices.updateContact(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
