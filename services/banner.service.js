const models = require("../models/index");
const CustomError = require("../common/libs/custom-error");

const getAllBanners = async () => {
  return await models.banner.scope("ms1").findAll({
    where: { isActive: true },
    order: [["updatedAt", "DESC"]],
  });
};

const createBanner = async (input) => {
  await models.banner.create({ ...input });
};

const updateBanner = async (input) => {
  const { id } = input;
  try {
    const banner = await checkBannerExists(id);
    await banner.update({ ...input });
  } catch (e) {
    throw e;
  }
};

const checkBannerExists = async (id) => {
  const banner = await models.banner.findOne({ where: { id } });
  if (!banner) {
    throw new CustomError({ message: "Banner not exists" });
  }
  return banner;
};

module.exports = {
  getAllBanners,
  createBanner,
  updateBanner,
};
