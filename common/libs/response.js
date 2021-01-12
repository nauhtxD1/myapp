const logger = require("log4js").getLogger();

const success = (res, data, message) => {
  logger.debug("Res body", JSON.stringify(data));
  return res.json({
    messages: message || "SUCCESS",
    data: data,
  });
};

const fail = (res, error, status) => {
  logger.error(error);
  if (error) {
  }

  return res.status(500).json({
    messages:
      process.env.NODE_ENV !== "production"
        ? error.message
        : "Unexpected error",
    errors: error.errors,
  });
};

module.exports = {
  success,
  fail,
};
