// Here is where you create all the functions that will do the routing for the app
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require("path");

var burger = require('./models/burger.js');

var port = process.env.PORT || 3000;

var app = express();

// Sets up the public path, using Node's path module
var publicPath = path.resolve(__dirname, "/public");
// Sends static files from the publicPath directory
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));

// // Tells Express that your views will be in a folder called views
// app.set("views", path.resolve(__dirname, "/views"));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Tells Express that you're going to use the handlebars templating engine
app.set('view engine', 'handlebars');

// Import routes to give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);


