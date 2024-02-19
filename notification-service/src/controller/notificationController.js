const Notification = require("../models/notificationModel.js");

exports.createNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const notification = new Notification({ userId, message });
    await notification.save();
    res
      .status(201)
      .json({ message: "Notification created successfully", notification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNotificationsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const notifications = await Notification.find({ userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
