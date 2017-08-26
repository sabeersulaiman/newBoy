const mongoose = require('mongoose');
const UserSchema = require('../Schema/UserSchema');

UserSchema.statics.response = function(user) {
    let u = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        profilePicture: user.profilePicture,
        access: user.access,
        token: null
    };

    return u;
}

UserSchema.statics.generateOtp = function() {
    var otpCode = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 5; i++)
        otpCode += possible.charAt(Math.floor(Math.random() * possible.length));

    return otpCode;
}

const UserModel = mongoose.model("User", UserSchema);
/**
 * @alias UserModel
 */
module.exports = UserModel;