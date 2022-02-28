const express = require("express");
// const db = require("../config/mongoose");
// const Tasks = require("../models/todo_tasks");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.get("/check-task/", homeController.checkTask);
router.get("/delete-tasks", homeController.deleteTasks);

router.post("/task-form", homeController.taskData);
// console.log("fetching data from routes");

module.exports = router;
