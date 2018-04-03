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

router.get('/activedetail',function(req,res,next){
    var activeID=url.parse(req.url,true).query.activeID;

    mysql.connect((db)=>{
        var queryObj={
            activeID
        };
        console.log(activeID,"------------")
        var showObj={};
        mysql.find(db,'activedetail',queryObj,showObj,(result)=>{
            res.send(result);
            console.log(result)
            db.close()
        })
    })
})
router.get('/active',function(req,res,next){
    mysql.connect((db)=>{
        var queryObj={};
        var showObj={};
        mysql.find(db,'active',queryObj,showObj,(result)=>{
            res.send(result);
            console.log(result)
            db.close()
        })
    })
})

router.get('/activebanner',function(req,res,next){
    mysql.connect((db)=>{
        var queryObj={};
        var showObj={};
        mysql.find(db,'activebanner',queryObj,showObj,(result)=>{
            res.send(result);
            db.close()
        })
    })
})


module.exports = router;
