const fs = require("fs");

module.exports.readVersion = function (contents) {
    return null;
};

module.exports.writeVersion = function (contents, version) {
    return `export const version = "${version}";\n`;
};
