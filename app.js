// required file
const express = require("express");
const path = require("path");
const fs = require("fs");

// express instanse create
const app = express();

// port
const PORT = process.env.PORT || 8080;

// middleware
app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "view")));

// routing
fs.readdirSync(`${__dirname}/routes`).map((fileName) => {
  app.use(
    "/auth",
    require(path
      .join(`${__dirname}`, "/routes", `${fileName}`)
      .replace(".js", ""))
  );
});

app.get("/", (req, res, next) => {
  res.send("home");
});

// listen method
app.listen(PORT, () => {
  console.log(`${PORT} Server is running...`);
});
