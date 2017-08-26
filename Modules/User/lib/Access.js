const jwt = require('jsonwebtoken');

/**
 * @function haveAccess
 * @param {Array<string>} accessArray
 * @param {string} requirement
 */
module.exports.haveAccess = function haveAccess(accessArray, requirement) {
    let found = accessArray.filter((access) => {
        if(access === requirement || access === 'ALL') return true;
    })

    if(found.length > 0) return true;
    return false;
}

/**
 * @function createToken
 * @param {string} secret
 * @param {Object} user
 */
module.exports.createToken = function createToken(secret, user) {
    let token = '';
    try {
        token = jwt.sign({
            _id: user._id,
            access: user.access,
            issuedAt: Date.now()
        }, secret, { expiresIn: 60 * 60 * 24 * 7 }); //7 days expiration
    }
    catch(e) {
        console.log(e);
        return null;
    }

    return token;
}