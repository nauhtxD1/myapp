const express = require("express");

const response = require("../common/libs/response");
const problemService = require("../services/problem.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await problemService.getAllProblems();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await problemService.createProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await problemService.updateProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await problemService.deleteProblem(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;