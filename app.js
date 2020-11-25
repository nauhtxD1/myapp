const express = require("express");
const app = express();
const index = require("./routes/index");
const port = 3000;

app.use(express.static("public"));
app.use("/api", index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
