var fs = require("fs");
var promise = require('bluebird');
var pgp = require('pg-promise')({ promiseLib: promise });
var config = JSON.parse(fs.readFileSync('./server-config.json'));

var connection = {
    host: config.database.host,
    port: config.database.port,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password
};

var pgDatabase = pgp(connection);

module.exports = pgDatabase;