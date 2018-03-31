var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var fs = require('fs');
var multer = require('multer');//中间件
var upload = multer({dest:'uploads/'});

router.get("/",(req,res,next)=>{
    res.render("subject/subject",{title:"主题活动",activeIndex:6})
})
router.get("/addSubject",(req,res,next)=>{
    res.render("subject/addSubject",{title:"增加活动",activeIndex:6})
})
module.exports = router;
