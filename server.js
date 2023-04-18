// required file
const app = require("./app");

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`${PORT} Server is running...`);
});
