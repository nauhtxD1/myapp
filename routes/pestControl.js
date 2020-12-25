const express = require("express");

const response = require("../common/libs/response");
const pestControlService = require("../services/pestControl.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await pestControlService.getAllPestControls();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = {
      name: "Rầy bông xoài",
      pesticides: " thuốc bảo vệ thực vật",
      detail:
        " Ngoài tự nhiên có một số loài thiên địch như bọ xít ăn thịt (Revudiidae), ong ký sinh và nấm Verticellium leanii, Hirsutella sp. có thể gây hại cho rầy. Sau thu hoạch tiến hành tỉa cắt cành tạo điều kiện thông thoáng để hạn chế sự phát triển của rầy",
      genusFeatureId: 1,
      epidemicId: 1,
    };
    await pestControlService.createPestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const input = { ...req.body, id: req.params.id };
    await pestControlService.updatePestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:id", async (req, res) => {
  try {
    const input = req.params.id;
    await pestControlService.deletePestControl(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
