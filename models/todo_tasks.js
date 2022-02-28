const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

const Tasks = mongoose.model("Tasks", todoSchema);

module.exports = Tasks;
//WE do this so that we can fetch this file from anywhere.
