const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const USER = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Check if the user exists
  const userExists = await USER.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  // Create a user
  const user = await USER.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Login User`,
  });
});
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `User data display`,
  });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
