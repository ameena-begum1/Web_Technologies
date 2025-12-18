var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

var data = [
  { id: 1, code: "CS401", sub: "DAA", imarks: 28, emarks: "S" },
  { id: 2, code: "CS402", sub: "CN", imarks: 30, emarks: "A" },
  { id: 3, code: "CS403", sub: "OS", imarks: 22, emarks: "B" },
  { id: 4, code: "CS404", sub: "Java", imarks: 25, emarks: "C" }
];

app.get("/", (req, res) => {
  res.render("memo", { data });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
