"use strict"

const m = require('mithril')
const config = require('../../admin-src/config-main');

const Main = {
    oninit : () => {
    },
    view : (vn) => {
        return [
            m("!doctype[html]"),
            m("head",
                m("title", "Buy Grocery Online | MangoStores"),
                m("meta[charset=utf8]"),
                m("meta[name=viewport][content='width=device-width, initial-scale=1, shrink-to-fit=no']"),
                m("link[rel=stylesheet][href=" + config.content_base + "css/styles.front.min.css]"),
                m("link[rel=stylesheet][href=https://fonts.googleapis.com/icon?family=Material+Icons]"),
                m("link[rel=stylesheet][href=https://fonts.googleapis.com/css?family=Roboto:400,500]")
            ),
            m("body", vn.children),
            m("script[src=" + config.content_base + "js/app.min.js]"),
            // m("script[src=" + config.content_base + "js/other.min.js]")
        ];
    }
}

module.exports = Main