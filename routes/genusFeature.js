const express = require("express");

const response = require("../common/libs/response");
const genusFeatureServices = require("../services/genusFeature.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const output = await genusFeatureServices.getAllGenusFeatures();
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const input = req.params.id;
    const output = await genusFeatureServices.getGenusFeatureById(input);
    response.success(res, output);
  } catch (e) {
    response.fail(res, e);
  }
});

router.post("/", async (req, res) => {
  try {
    const input = {
      name: "Xoài Cát Chu",
      productivity:
        "Năng suất rất cao (cây xoài trên 30 năm tuổi cho năng suất từ 800-1.200kg/cây/năm)",
      harvestTime: "Từ tháng 3 đến tháng 5 dương lịch",
      genusId: 1,
      provinceId: "87",
      define:
        "Xoài cát chu xuất hiện lần đầu tiện tại Thành phố Cao Lãnh, tỉnh Đồng Tháp và có thể khẳng định nó thuần chuẩn 100%. Xoài cát chu có hình dáng tròn đều như xoài cát Hòa Lộc, nhưng kích thước hơi nhỏ gọn hơn một tí. Quả khi còn sống cũng có màu vàng hơi nhạt, khi chín chuyển dần sang vàng đậm. Khi còn sống xoài cát chu khá chua, khi chín thì thịt lại mềm thơm, ít xơ, vị ngọt đậm và hương thơm rất quyến rũ. Khi ăn bạn sẽ dễ dàng cảm nhận được độ ngọt thơm mà khó có thể lẫn với các loại xoài khác.",
      nutrition:
        "Trong Xoài Cát Chu có chứa nhiều Vitamin C, A, B, E, pectin, phốt pho, Kali, Magie, chất xơ… giúp ngăn chặn ung thư, ngăn ngừa bệnh tim mạch; làm giảm huyết áp, giảm nguy cơ tiểu đường; phòng chống đau đầu, nứt xương, stress; tăng cường thị lực. Bên cạnh đó xoài còn có tác dụng hỗ trợ tiêu hóa, cải thiện trí nhớ và giúp làm đẹp da.",
    };
    await genusFeatureServices.createGenusFeature(input);
    response.success(res);
  } catch (e) {
    response.fail(res, e);
  }
});

module.exports = router;
