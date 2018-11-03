var express = require('express');
var app = express();
//This approach allows me to abstract away any connection
// details wrap anything else you want to expose and 
// require db throughout your application while maintaining 
// one connection to your db
var db = require('./config/connection.js');