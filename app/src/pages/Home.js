"use strict"

const m = require('mithril')
const Navigation = require('../components/Navigation');

const Home = {
    oninit : () => {
    },
    view : () => {
        return m("h1", "Packing for you");
    }
}

module.exports = Home