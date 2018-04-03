var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var multer = require('multer');//引入中间件
var upload = multer({dest:'uploads/'});//上传文件到uploads
var fs = require('fs');//引入文件模块
var async = require('async');//引入async模块
/* GET users listing. */
/*===============================跳转news页面=========================*/

router.get('/', function(req, res, next) {
    var pageNum = url.parse(req.url,true).query.pageNum;
    var newsID =  url.parse(req.url,true).query.newsID;
    console.log(pageNum,"-----------------------")
    mysql.connect(function(db){
        if(newsID){
            mysql.find(db,"news",{newsID:newsID},{},(result)=>{
                res.send(result);
                db.close();
            })
        }else if(pageNum){
            var limitNum = 4;
            var skipNum = (pageNum-1) * limitNum;
            mysql.findFenye(db, 'news', {}, {_id:0},limitNum,skipNum,pageNum, function(resultAll) {
                res.send(resultAll);
                    db.close();
            })

        }else{
            mysql.find(db,"news",{},{},(result)=>{
                var allPageNum = Math.ceil(result.length/4) 
                res.send({
                    allPageNum:allPageNum
                });
                db.close();
            }) 
        }
       /*  mysql.find(db,"news",{},{},(result)=>{
            res.send(result);
            db.close();
        }) */

      
    })
});



module.exports = router;
