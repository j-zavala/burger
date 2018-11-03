var mysql = require('mysql');

// Login details to mysql database
var con = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "newpassword",
    database: 'burgers_db'
});

// Creates a connection to the database
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! ID is " + con.threadId);
});

module.exports = con;