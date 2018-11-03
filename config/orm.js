// Here you write functions that take inputs and conditions
// and turns them into database commands like SQL

// All your sql code is located in here
// in burger.js you are simply modifying this mysql code
// ----------
var connection = require('./connection.js');

var orm = {
    // We have a callback here b/c after selecting all that data, 
    // we are going to want to run whatever function we have in burger.js 
    // using that data; the data ends up being sent to the front-end as
    // burger.js has its own callback
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (error) throw err;
            cb(result);
        });
    },
    // vals is an array of values that we want to save to cols
    // cols are the columns we want to insert the values into
    create: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString = queryString + ' (';
        queryString = queryString + cols.toStrings;
        queryString = queryString + ' )';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ' )';

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // objColVals would be the columns and values that you want to update
    update: function (table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });

    }
}