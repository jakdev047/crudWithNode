// required file
const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");

// express instanse create
const app = express();

// middleware
app.set("views", "./view");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "view")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routing
require("./routes/routes")(app);

module.exports = app;
