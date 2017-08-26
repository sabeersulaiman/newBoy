"use strict"

const Config = require('./Config');
const Request = require('./Request');

const User = {
    loggedIn: false,
    user: null,
    token: null,
    phoneSignUp(
        phone,
        success,
        failure
    ) {
        Request.postBody({
            url: Config.user + "phone",
            data: {phone: phone}
        }).then(
            data => {
                if(data.statusCode === "MUAL100" || data.statusCode === "MUAS100") {
                    success(data.statusCode);
                } else {
                    failure(data.statusCode)
                }
            }
        ).catch(
            error => {
                failure(error)
            }
        )
    },
    phoneLogin(
        data,
        success,
        failure
    ) {
        Request.postBody({
            url: Config.user + "phoneLogin",
            data: data
        }).then(
            data => {
                if(data.statusCode === "MUE100") {
                    data = data.data;
                    User.user = data;
                    User.loggedIn = true;
                    User.token = data.token;
                    localStorage['mangostoreUserToken'] = User.token;

                    success(data)
                } else {
                    failure(data.statusCode)
                }
            }
        ).catch(
            error => {
                failure(error)
            }
        )
    },
    verifyOtp(
        data,
        success,
        failure
    ) {
        Request.postBody({
            url: Config.user + "verifyOtp",
            data: data
        }).then(
            data => {
                if(data.statusCode === "MUB100") {
                    data = data.data;
                    User.user = data;
                    User.loggedIn = true;
                    User.token = data.token;
                    localStorage['mangostoreUserToken'] = User.token;

                    success(data)
                } else {
                    failure(data.statusCode)
                }
            }
        ).catch(
            error => {
                failure(error)
            }
        )
    },
    signUpVerify(
        data,
        success,
        failure
    ) {
        Request.postBody({
            url: Config.user + "signUpVerify",
            data: data
        }).then(
            data => {
                if(data.statusCode === "MUD100") {
                    data = data.data;
                    User.user = data;
                    User.loggedIn = true;
                    User.token = data.token;
                    localStorage['mangostoreUserToken'] = User.token;

                    success(data)
                } else {
                    failure(data.statusCode)
                }
            }
        ).catch(
            error => {
                failure(error)
            }
        )
    }
};

module.exports = User;