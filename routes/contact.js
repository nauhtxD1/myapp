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

module.exports = router;
