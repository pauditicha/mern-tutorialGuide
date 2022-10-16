const asyncHandler = require("express-async-handler");
const GOAL = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await GOAL.find();
  res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  //   console.log(req.body.text.rainbow);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text field");
  }
  const goal = await GOAL.create({ text: req.body.text });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
