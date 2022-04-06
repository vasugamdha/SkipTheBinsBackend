// Author : Aabhaas Jain
const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const auth = require("../middlewares/authMiddleware.js");

router.get("/:id", auth, notificationController.getNotificationsById);

router.post("/", auth, notificationController.addNotification);

router.get("announcements", auth, notificationController.getAllAnnouncements);

router.delete("/:id", auth, notificationController.deleteNotification);

module.exports = router;
