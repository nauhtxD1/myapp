const express = require("express");

const response = require("../common/libs/response");
const documentServices = require("../services/document.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await documentServices.getAllDocuments();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/lastest-docs/:limit", async (req, res) => {
  try {
    const input = req.params.limit;
    const output = await documentServices.getLastestDocuments(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await documentServices.createDocument(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await documentServices.deleteDocument(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await documentServices.updateDocument(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
