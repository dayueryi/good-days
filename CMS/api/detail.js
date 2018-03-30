var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var mycode = require('./tool/mycode');
var url = require('url');
var ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/showdetail', function(req, res, next) {
    var templateID = url.parse(req.url,true).query.templateID;
    mysql.connect((db)=>{
        var queryObj = {
            templateID:templateID
        };
        console.log(queryObj,"------------")
        var showObj = {};
        mysql.find(db,'showdetail',queryObj,showObj,(result)=>{
           res.send(result);
            // res.render('updateAddress',obj);
            db.close();
        })
    })
});

router.get('/workdetail', function(req, res, next) {
    var templateID = url.parse(req.url,true).query.templateID;
    
    mysql.connect((db)=>{
        var queryObj = {
            templateID:templateID
        };
        console.log(queryObj,"------------")
        var showObj = {};
        mysql.find(db,'workdetail',queryObj,showObj,(result)=>{
           res.send(result);
            // res.render('updateAddress',obj);
            db.close();
        })
    })
});

module.exports = router;
