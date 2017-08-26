"use strict"

const Model = require('mongoose').Model;
const User = require('../lib/Goal');

/**
 * @function GoalControl
 * @param {Model<any>} GoalModel
 * @returns GoalController
 */
module.exports = function GoalControl(GoalModel) {
  const GoalController = {};

  return GoalController;
};