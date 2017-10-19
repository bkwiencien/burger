var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');

router.get('/', function (req, res) {
    queries.selectAll(function(data){
        var data_obj = {
            burgerData: data
        }
        res.render('index', data_obj);
    });
});

router.post('/create', function (req, res) {
    queries.insertOne(req.body.burger_name, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    console.log("I eat the burger");
    queries.updateOne(req.params.id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;

