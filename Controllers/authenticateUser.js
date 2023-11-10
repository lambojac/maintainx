const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

<<<<<<< HEAD
  const verifyEmailAndToken = async (req, res) => {
    const { email, token } = req.body; // Extract email and token from the body
    try {
      const user = await Users.findOne({ email }).exec();
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const decoded = await bcrypt.compare( token, user.authToken.token);
      if (!decoded) {
      return res.status(403).json({ message: 'Token not valid' });
      }
      // // Check if the token matches the stored token
      // if (user.authToken.token !== token) {
      //   return res.status(403).json({ message: 'Invalid token' });
      // }


      const currentTime = new Date();

      // Check if the token has expired
      if (user.authToken.expiry < currentTime) {
        return res.status(403).json({ message: 'Token has expired' });
      }

      // Mark the user as verified (you can set a flag in the user model)
      user.isActive = true;
      await user.save();
      return res.status(200).json({ message: 'Token has been verified' });

      //res.redirect('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error during email and token verification:', error);
      res.status(500).json({ message: 'Verification failed' });
=======
const verifyEmailAndToken = asyncHandler(async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({ message: "Email and token are required" });
>>>>>>> 59fbec57f683cf579bb5f0acdd177eaec06b9234
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

    // Mark the user as verified (update the isActive status)
    user.isActive = true;
    await user.save();

    res.status(200).json({ message: "User has been authenticated successfully" });
  } catch (error) {
    console.error('Error during user authentication:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
});

module.exports = { verifyEmailAndToken };
