var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res) {
    burger.create(['burger_name', 'devoured'], [req.body.burgers_name, req.body.devoured], function () {
        res.redirect('/burgers');
    });
});

router.put('/cats/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({ burgers_name: req.body.burgers_name }, condition, function () {
        res.redirect('/cats');
    });
});

module.exports = router;