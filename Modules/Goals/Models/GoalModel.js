const GoalSchema = require('../Schema/GoalSchema');
const mongoose = require('mongoose');

module.exports = mongoose.model("GoalModel", GoalSchema);