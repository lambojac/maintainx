const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const verifyEmailAndToken = asyncHandler(async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({ message: "Email and token are required" });
    }

    const user = await Users.findOne({ email }).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidToken = await bcrypt.compare(token, user.authToken.token);

    if (!isValidToken) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const currentTime = new Date();

    if (user.authToken.expiry < currentTime) {
      return res.status(403).json({ message: "Token has expired" });
    }

    // Mark the user as verified (update the isActive statuses)
    user.isActive = true;
    await user.save();

    res.status(200).json({ message: "User has been authenticated successfully" });
  } catch (error) {
    console.error('Error during user authentication:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
});

module.exports = { verifyEmailAndToken };
