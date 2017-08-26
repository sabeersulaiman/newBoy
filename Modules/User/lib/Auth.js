const Config = require('../../../config');
const Access = require('./Access');

module.exports = {
    /**
     * @function Authenticates the API Key
     */
    APIAuthFront () {
        return function (req, res, next) {
            if(req.header('api-key') === Config.api.keyFront) {
                //posix
                next();
            } else {
                res.status(401).end();
            }
        }
    },
    /**
     * @function Authorization of access levels in app
     * @param {string} accessRequired
     */
    Authorize (accessRequired) {
        return function (req, res, next) {
            let token = req.cookies.mangostoresjwt;
            //verify Token first
            let q = Access.verifyToken(token);
            q.then(
                payload => {
                    if(payload.access) {
                        if(Access.haveAccess(payload.access, accessRequired)) {
                            req.authorizedUser = payload;
                            next();
                        } else {
                            res.status(401).end();
                        }
                    }
                    else res.status(401).end();
                }
            ).catch(
                e => {
                    console.error(e);
                    res.status(401).end();
                }
            )
        }
    }
}