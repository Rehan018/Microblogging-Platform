const Follow = require("../models/followModel.js");

exports.followUser = async (req, res) => {
  try {
    const { userId } = req.userData;
    const { followingId } = req.params;

    if (userId === followingId) {
      return res.status(400).json({ message: "You cannot follow yourself" });
    }

    const existingFollow = await Follow.findOne({
      follower: userId,
      following: followingId,
    });
    if (existingFollow) {
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    }

    const follow = new Follow({ follower: userId, following: followingId });
    await follow.save();
    res.status(201).json({ message: "User followed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const { userId } = req.userData;
    const { followingId } = req.params;

    const follow = await Follow.findOneAndDelete({
      follower: userId,
      following: followingId,
    });
    if (!follow) {
      return res
        .status(404)
        .json({ message: "You are not following this user" });
    }

    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
