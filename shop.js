let r = "";
const config = require('./config');

r += "<!DOCTYPE html>"
+ "<html>"

+ "<head>" +
    `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <title>Loading | Manage MangoStores</title>`

+    `<link rel="stylesheet" href="${config.cdn.url}css/admin.min.css">`

+    `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
+    `</head>`

+ `<body>
</body>`
+ `<script src="${config.cdn.url}js/admin.other.min.js"></script>`
+ `<script src="${config.cdn.url}js/admin.app.min.js"></script>`
+ "</html>"

module.exports = r;