// Here you modify the mysql code in orm.js
// This is where you setup a model for how to interface with the database
// Has ORM functions using burger specific input for the ORM
var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    // cols and vals are arrays
    // creates a new burger in the database
    create: function (cols, vals, cb) {
        insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    // updates a burger within our database
    update: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;