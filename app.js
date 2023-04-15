// required file
const express = require("express");
const path = require("path");

// express instanse create
const app = express();

// port
const PORT = process.env.PORT || 8080;

// middleware
app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "view")));

// routing
app.get("/", (req, res, next) => {
  return res.render("index");
});

app.use((err, req, res, next) => {
  res.status(500).render("error", { title: "Error" });
});

// listen method
app.listen(PORT, () => {
  console.log(`${PORT} Server is running...`);
});
