const express = require("express");
const app = express();
const index = require("./routes/index");
const bodyParser = require("body-parser");
const port = 8080;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("public"));
app.use("/api", index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
