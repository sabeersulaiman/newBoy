const Hashing = require('./Hashing');
const jwt = require('jsonwebtoken');
const Config = require('../../../config');

/**
 * @typedef {Object} authType
 * @property {string} authenticationProvider
 * @property {string} authenticationProviderPublic
 * @property {string} authenticationProviderSecret
 * @property {string} authenticationProviderKey
 * @property {string} authenticationRequestedAt
 */


/**
 * @typedef {Object} User
 * @property {string} phone
 * @property {string} email
 * @property {string} updatedAt,
 * @property {string} lastLogin,
 * @property {string} firstName,
 * @property {string} lastName,
 * @property {string} profilePicture,
 * @property {string} access
 * @property {[authType]} authTypes
 */

module.exports = {
  respond(code, message) {
    return {
      status: code,
      message: message,
      data: null
    };
  },
  getUserData(user) {
    return {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
      bio: user.bio,
      location: user.location,
      locationName: user.locationName
    }
  }
}