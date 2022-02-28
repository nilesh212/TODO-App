const db = require("../config/mongoose");
const Tasks = require("../models/todo_tasks");

module.exports.home = function (req, res) {
  Tasks.find({}, function (err, tasks) {
    if (err) {
      console.log("Error while fetching database ");
      return;
    }
    // console.log("Fetching database ");
    return res.render("home", {
      title: "TODO App",
      task_list: tasks,
    });
  });
};

module.exports.taskData = function (req, res) {
  console.log(req.body);
  Tasks.create(req.body, function (err, tasks) {
    if (err) {
      console.log("Error while creating data");
      return;
    }
    console.log(tasks);
    return res.redirect("back");
  });
};

// Checks whether task is completed or not
module.exports.checkTask = function (req, res) {
  let id = req.query.id;
  let taskComplete = req.query.complete;

  //NOTE:- findById and all other functions are asynchronous;

  Tasks.findByIdAndUpdate(
    id,
    {
      complete: taskComplete,
    },
    function (err, task) {
      if (err) {
        console.log("Error while checking task status: ", err);
        return;
      }
      return res.redirect("/");
    }
  );
};

// Deletes All Completed Task
module.exports.deleteTasks = function (req, res) {
  Tasks.deleteMany({ complete: true }, function (err) {
    if (err) {
      console.log("Error while deleting tasks");
      return;
    }
    return res.redirect("/");
  });
};
