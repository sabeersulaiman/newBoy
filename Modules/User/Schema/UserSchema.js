const Schema = require('mongoose').Schema;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: false
        },
        firstName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
        profilePicture: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: ""
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
            default: ""
        }
    },
    {
        collection: 'users',
        autoIndex: true
    }
);

UserSchema.index({email: 1}, {unique: true});
UserSchema.index({location: '2dSphere'});

module.exports = UserSchema;