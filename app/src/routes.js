"use strict"

const m = require('mithril');
const Home = require('./pages/Home');

const routes = {
    "/" : Home,
    "/Home" : Home
}

m.route.prefix('')

module.exports = routes;