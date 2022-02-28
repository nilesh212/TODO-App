const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo_app_db");

const database = mongoose.connection;

database.on("error", console.error.bind(console, "error connecting to db"));

database.once("open", function () {
  console.log("Successfully connected to database");
});
