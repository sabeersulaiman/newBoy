"use strict"

const Model = require('mongoose').Model;
const responses = require('../lib/Response');
const status = responses.status;
const User = require('../lib/User');

/**
 * @typedef UserController
 * @method signUp
 * @method otpSignUp
 */

/**
 * @function UserControl
 * @param {Model<any>} UserModel
 * @returns UserController
 */
module.exports = function UserControl(UserModel) {
  const UserController = {};

  /**
   * @function signUp
   * @param {object} req
   * @param {object} res
   */
  UserController.signUp = function(req, res) {
    if(!req.body) {
      res.json(User.respond("UA300", "Failure"));
    }

    let password = req.body.password;
    let email = req.body.email;

    let q = UserModel.find({email: email}).exec();
    q.then(
      data => {
        if(data.length > 0) res.json(User.respond("UA200", "User Already signed Up."));
        
        let user = new UserModel({
          email: email,
          password: password
        });

        let s = user.save();
        s.then(
          data => {
            if(data) {
              let r = User.respond("UA100", "Success");
              r.data = User.getUserData(data);
              res.json(r);
            }
          }
        )
        .catch(
          e => {
            console.log(e);
            res.json(User.respond("UA300", "Failure"));
          }
        )
      }
    )
    .catch(
      e => {
        console.log(e);
        res.json(User.respond("UA300", "Failure"));
      }
    )
  }

  UserController.login = function login(req, res) {
    let data = req.body;
    if(!data) {
      res.json(User.respond("UB300", "Failed."));
      return false;
    }

    let email = data.email;
    let password = data.password;

    let q = UserModel.find({email: email, password: password}).exec();
    q.then(
      users => {
        if(users.length === 0) {
          res.json(User.respond("UB200", "Not a user."));
          return;
        }

        let user = users[0];
        let r = User.respond("UB100", "Logged In.");
        r.data = User.getUserData(user);
        res.json(r);
      }
    ).catch(
      e => {
        res.json(User.respond("UB300", "Failed"));
      }
    )
  }

  UserController.getProfile = function(req, res) {
    let id = req.params.id;
    let q = UserModel.findById(id).exec();
    q.then(
      user => {
        if(!user) {
          return res.json(User.respond("UC200", "User not found"));
          return;
        }

        let r = User.respond("UC100", "User details fetched.");
        r.data = User.getUserData(user);
        res.json(r);
      }
    )
    .catch(
      e => {
        console.log(e);
        res.json(User.respond("UC300", "Failed"));
      }
    )
  }

  UserController.updateProfile = function(req, res) {
    let oldUser = req.body;
    let q = UserModel.findById(oldUser.id).exec();
    
    q.then(
      user => {
        if(!user) {
          return res.json(User.respond("UD200", "User not found"));
          return;
        }

        user.firstName = oldUser.firstName;
        user.lastName = oldUser.lastName;
        user.bio = oldUser.bio;
        user.location = oldUser.location;

        let nq = user.save();
        nq.then(
          nu => {
            let r = User.respond("UD100", "Success");
            r.data = User.getUserData(nu);
            res.json(r);
          }
        )
        .catch(
          e => {
            console.log(e);
            res.json(User.respond("UD300", "Failed"));
          }
        )
      }
    )
    .catch(
      e => {
        console.log(e);
        res.json(User.respond("UD300", "Failed"));
      }
    )
  }

  return UserController;
};