const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3333;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("API Server Node JS for Game Posts Aplication!");
});

const routes = require("./routes/index")(app);

app.listen(port, () => {
  console.log(`Sever listen on: ${port}`);
});
