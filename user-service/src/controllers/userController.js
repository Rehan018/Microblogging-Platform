const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JW_SECRET = "your-secret-key";

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, phoneno } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      phoneno,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ email: user.email, userId: user._id }, JW_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatedUser = async (req, res) => {
  try {
    const userId = req.userData.userId;
    const updateOps = {};
    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key];
    }
    await User.updateMany({ _id: userId }, { $set: updateOps });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.userData.userId;
    await User.deleteOne({ _id: userId });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
