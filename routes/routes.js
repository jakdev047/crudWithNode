const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  fs.readdirSync(`${__dirname}`).map((fileName) => {
    app.use(
      "/auth",
      require(path.join(`${__dirname}`, "", `${fileName}`).replace(".js", ""))
    );
  });
  app.get("/", (req, res, next) => {
    res.send("home");
  });
};
