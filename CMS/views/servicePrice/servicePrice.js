var express = require('express');
var router = express.Router();
var mysql = require('./../tool/mysql');
var url = require('url');
var fs = require('fs');
var multer = require('multer');//中间件

//接口
router.get("/servicePriceApi",(req,res,next)=>{
    var servicePriceID = url.parse(req.url,true).query.servicePriceID;
    var serviceType =  url.parse(req.url,true).query.serviceType;
    if(servicePriceID){

        var queryObj = {
            servicePriceID:servicePriceID
        }
    }else{
        var queryObj = {
            serviceType:serviceType
        }
    }
    mysql.connect((db)=>{
        mysql.find(db,"servicePrice",queryObj,{_id:0},(result)=>{         
            res.send(result)
            db.close()
        })
    })
})
module.exports = router;
