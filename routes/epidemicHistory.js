const express = require("express");
const axios = require("axios");

const response = require("../common/libs/response");
const epidemicHistoryServices = require("../services//epidemicHistory.service");
const router = express.Router();

const fcmNoti = async (body, title) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "key=AAAAjDb3l3I:APA91bEQKO5PBZlMhE5U1-bXqGWTZV__IOICcUtOqiHss-ms7jxbsL_8iyrkAh6o6KgRFheu4Xcb-UgpYPBdNGUHkRR2fIdx1PwunaANOUSmrk5trBAirnLZkaW_SLeTWWN5g0BvkejA",
  };
  const fcmData = {
    to: "/topics/epidemics",
    data: {
      body: body,
      title: title,
    },
    notification: {
      body: body,
      title: title,
    },
    priority: "high",
  };
  await axios.post("https://fcm.googleapis.com/fcm/send", fcmData, {
    headers: headers,
  });
};

router.get("/", async (req, res) => {
  try {
    const output = await epidemicHistoryServices.getAllEpidemicHistories();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/count", async (req, res) => {
  try {
    const output = await epidemicHistoryServices.getAllCountEpidemics();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await epidemicHistoryServices.getAllEpidemicHistoriesByUID(
      input
    );
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = req.body;
    await epidemicHistoryServices.createEpidemicHistory(input);
    const output = await epidemicHistoryServices.getLastestEpidemicHistory();
    await fcmNoti(
      `Vừa phát hiện ${output.epidemic.name} trên giống ${output.plant.genusFeature.name}`,
      output.plant.household.province.provinceName
    );
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/update/:plantId/:epidemicId", async (req, res) => {
  try {
    const input = {
      ...req.body,
      plantId: req.params.plantId,
      epidemicId: req.params.epidemicId,
    };
    await epidemicHistoryServices.updateEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

router.put("/delete/:plantId/:epidemicId", async (req, res) => {
  try {
    const input = {
      plantId: req.params.plantId,
      epidemicId: req.params.epidemicId,
    };
    await epidemicHistoryServices.deleteEpidemicHistory(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
