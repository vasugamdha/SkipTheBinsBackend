// Author : Aabhaas Jain
const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["notification", "announcement"],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
const notification = mongoose.model("notification", NotificationSchema);
module.exports = notification;
