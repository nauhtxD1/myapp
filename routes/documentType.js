const express = require("express");

const response = require("../common/libs/response");
const documentTypeService = require("../services/documentType.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await documentTypeService.getAllDocumentTypes();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await documentTypeService.createDocumentType(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
