var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');

router.get('/', function (req, res) {
    queries.show(function(data){
        var data1 = {
            burgerData: data
        }
        res.render('index', data1);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.burger_name, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    console.log("I eat the burger");
    queries.eat(req.params.id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;
