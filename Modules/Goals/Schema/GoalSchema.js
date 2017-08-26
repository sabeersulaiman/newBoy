const Schema = require('mongoose');

const GoalSchema = new Schema(
  {
    goalName: {
      type: String,
      required: true
    },
    location: {
      type: {
        type: String,
        required: true,
        enum: ['Point', 'LineString', 'Polygon'],
        default: 'Point'
      },
      coordinates: [Number]
    },
    locationName: {
      type: String,
      required: true
    }
  },
  {
    collection: "goals",
    autoIndex: true
  }
);

GoalSchema.index({location: '2dSphere'});

module.exports = GoalSchema;