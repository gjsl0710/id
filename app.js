const express = require("express");
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/pulic");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
