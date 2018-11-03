// Here you modify the mysql code in orm.js
// This is where you setup a model for how to interface with the database
// Has ORM functions using burger specific input for the ORM
var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll('cats', function (res) {
            cb(res);
        });
    },
    // cols and vals are arrays
    // creates a new cat in the database
    create: function (cols, vals, cb) {
        insertOne('cats', cols, vals, function (res) {
            cb(res);
        });
    },
    // updates a cat within our database
    update: function (objColVals, condition, cb) {
        orm.updateOne('cats', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;