const langData = require('./data/en');
const Polyglot = require('node-polyglot');

const lang = new Polyglot({locale : 'en'});
lang.extend(langData);

function getPhrase(key, data) {
    return data ? lang.t(key, data) : lang.t(key);
}

module.exports.t = getPhrase