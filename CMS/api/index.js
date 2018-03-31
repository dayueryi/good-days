var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var multer = require('multer');//引入中间件
var upload = multer({dest:'uploads/'});//上传文件到uploads
var fs = require('fs');//引入文件模块

/* GET home page. */
router.get('/', function(req, res, next) {
//  跳转登录页面
    var  login = 0;
    if(req.cookies.login == 1){
        mysql.connect((db)=>{
          var queryObj = {};
          var showObj = {};
          mysql.find(db,'users',queryObj,showObj,(result)=>{
              res.render('index', { title: '听风少年-首页',activeIndex:0,result:result});
              db.close();
          })
        })
    }else{
        res.render('login', { title: '听风少年-登录',activeIndex:0,errInfo:'' });
    }
});

//查询---跳转nav导航
router.get('/nav', function(req, res, next) {
    var navType = url.parse(req.url,true).query.navType;
    mysql.connect(function(db){
        var queryObj = {navType:navType};
        var showObj = {};
        mysql.find(db, 'nav', queryObj, showObj, function(resultAll) {
                res.send(resultAll);
                db.close();
            })
        })
});

/* var limitNum=4;
 if(JSON.stringify(req.query)=="{}"){
 console.log('234567')
 var pageCode=1;

 }else{
 var pageCode=req.query.pageCode;
 }
 */
//查询---跳转banner导航
router.get('/banner', function(req, res, next) {
    //一进入列表页面就分页

    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
       
        mysql.find(db, 'banner', queryObj, showObj, function(resultAll) {
            res.send(resultAll)
            db.close()
        })
    })
});



//跳转模板页面
router.get('/template', function(req, res, next) {

   
    
    mysql.connect((db)=>{
    var query = url.parse(req.url,true).query.classID;//获取url中"?"符后的字串
        if(query){
            var queryObj = {addressID:query};
        }else{
            var queryObj = {};
        }
        var showObj = {};
        mysql.find(db,'template',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-模板',
                activeIndex:0,
                result:result
            }
			res.send(result);
            db.close();
        })
    })
});


/*===============================跳转active页面=========================*/

router.get('/active', function(req, res, next) {
   
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'active', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'active', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-active",
                    activeIndex:4,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                res.send(result);
                db.close();
            })
        })
    })
});


/* ==============================address====================================== */
 //跳转用户页面
  router.get('/address', function(req, res, next) {
    //一进入列表页面就分页
        var pageCode = url.parse(req.url, true).query.pageCode * 1;
        var limitNum = url.parse(req.url, true).query.limitNum * 1;
        mysql.connect(function(db){
            var queryObj = {};
            var showObj = {_id:0};
            var skipNum = pageCode * limitNum;
        mysql.find(db, 'address', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'address', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-用户",
                    activeIndex: 0,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                console.log(obj.totalPage);
              
                res.send(result);
                db.close();
            })
        })
    })
}); 


router.get('/smallnav', function(req, res, next) {
        mysql.connect(function(db){
            var queryObj = {};
            var showObj = {_id:0};
        mysql.find(db, 'smallnav', queryObj, showObj, function(resultAll) {
                var obj = {
                    title: "听风少年-用户",
                    activeIndex: 0,
                    tip: '',
                    resultAll: resultAll
                }
                res.send(resultAll);
                db.close();
            })
    })
}); 



router.get('/showdetail', function(req, res, next) {
    // var addressID = url.parse(req.url,true).query.classID;
    mysql.connect(function(db){
        // var queryObj = {addressID:addressID};
        var queryObj = {};
        
        var showObj = {_id:0};
        mysql.find(db, 'showdetail', queryObj, showObj, function(resultAll) {
                res.send(resultAll);
                db.close();
            })
        })
});
module.exports = router;
