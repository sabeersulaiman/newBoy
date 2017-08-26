require('dotenv').config(); //read environment variables
const config = require('./config');
const fs = require('fs');

//write a config file for admin
console.log("Writing admin config file.....")
let confData = {
    base: config.site.url,
    content_base: config.cdn.url,
    storage_base: config.storage.url,
    back: config.api.keyBackend,
    front: config.api.keyFront
};

fs.writeFile("./app/admin-src/config-main.js", "module.exports=" + JSON.stringify(confData), function(err) {
    if(err) {
        return console.error("Failed to write admin configuration file.")
    }

    console.log("Completed.");
}); 