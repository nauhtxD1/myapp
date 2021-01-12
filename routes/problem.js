const express = require("express");

const response = require("../common/libs/response");
const problemServices = require("../services/problem.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await problemServices.getAllProblems();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/count/all", async (req, res) => {
  try {
    const output = await problemServices.getAllCountProblems();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await problemServices.createProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await problemServices.updateProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await problemServices.deleteProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
