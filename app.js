const express = require("express");
const app = express();
const index = require("./routes/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3010;

const pg = require("pg");
pg.defaults.ssl = true;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});

app.use(express.static("public"));
app.use("/api", index);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
