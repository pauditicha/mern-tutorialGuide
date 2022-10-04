const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const GOAL = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await GOAL.find();
  res.json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text field");
  }
  const goal = await GOAL.create({
    text: req.body.text,
  });
  res.json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await GOAL.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await GOAL.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await GOAL.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();
  res.json({
    id: req.params.id,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
