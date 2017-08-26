const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const config = require('../../../config');
const Auth = require('../lib/Auth');
const UserModel = require('../Models/UserModel');
const UserController = require('../Controllers/UserController')(UserModel);

//FRONT END API AUTH

router.post('/signUp', bodyParser.json(), UserController.signUp);
router.post('/login', bodyParser.json(), UserController.login);
router.get('/:id', UserController.getProfile);
router.post('/updateProfile', bodyParser.json(), UserController.updateProfile);

module.exports = router;