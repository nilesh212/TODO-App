const express = require("express");
const path = require("path");
const port = 8000;

// const db = require("./config/mongoose");
// const Tasks = require("./models/todo_tasks");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/", require("./routes")); // anything that comes go to the routes
// anything here means URL

// app.get("/", function (req, res) {
//   return res.render("home");
// });

app.listen(port, function (err) {
  if (err) {
    console.log("error: ", err);
    return;
  }
  console.log("Server is running on port: ", port);
});
