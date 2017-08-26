'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const config = require('./config');
const cookieParser = require('cookie-parser');
const shop = require('./shop');

// Load Modules
const User = require('./Modules/User');

mongoose.Promise = bluebird;
global.Promise = bluebird;

//DATABASE
// mongoose.connect(config.MongoDBConnectionString);
let promise = mongoose.connect(config.db.connection, {
  useMongoClient: true
});
// mongoose.set('debug', true);
promise.then(
    (db) => {
        db.on("error", console.error.bind(console, "Connection Error"));
        db.once("open", () => {
            console.log("we're connected to " + config.db.connection);
        })
    }
)

let app = express();

//current cdn - make this deliver from nginx in production
app.use(express.static("dist"));

//parse cookies
app.use(cookieParser())

//Deliver shop manager app
const shopApp = function shopApp(req, res) {
    res.send(shop);
}
app.get('/admin', shopApp);

// Home Routes

// Define Module Routes
app.use(User.route, User.routes);

module.exports = app;