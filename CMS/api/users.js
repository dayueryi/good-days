var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var mycode = require('./tool/mycode');
var url = require('url');
var ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
//跳转用户页面
router.get('/', function(req, res, next) {
    //一进入列表页面就分页
        var pageCode = url.parse(req.url, true).query.pageCode * 1;
        var limitNum = url.parse(req.url, true).query.limitNum * 1;
        mysql.connect(function(db){
            var queryObj = {};
            var showObj = {_id:0};
            var skipNum = pageCode * limitNum;
        mysql.find(db, 'users', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'users', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-用户",
                    activeIndex: 2,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                console.log(obj.totalPage);
                // res.render('users', obj);
                res.send(result);
                db.close();
            })
        })
    })
});

//跳转添加用户页面
router.get('/addUser', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('addUser',{title:'听风少年-添加用户',activeIndex:2})
});

//添加用户详细信息数据
router.post('/addUserAction', function(req, res, next) {
    // res.send('respond with a resource');
    var userID = req.body.userID;
    mysql.connect((db)=>{
        var queryObj = {userID:userID};
        var showObj = {};
        mysql.find(db,'users',queryObj,showObj,(resultAll)=>{
            if(resultAll.length > 0){
                res.render('addUser',{title:'听风少年-添加用户',activeIndex:2,tip:'用户已存在'})
            }else{
                var insertData = req.body;
                mysql.insert(db,'users',insertData,(result)=>{
                    res.redirect('/users?limitNum=4&pageCode=0');
                    db.close();
                })
            }
        })
    })

});
//跳转更新用户页面
router.get('/updateUser', function(req, res, next) {
    // 根据nameID查询user
    var userID = url.parse(req.url,true).query.userID;
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
            userID:userID
            // ObjectId:ObjectId(ObjectId)
        };
        var showObj = {};
        mysql.find(db,'users',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新用户',
                activeIndex:2,
                result:result
            }
            res.render('updateUser',obj);
            db.close();
        })
    })
});
//更新用户页面
router.post('/updateUserAction', function(req, res, next) {
    // 通过nameID来获取用户的详细信息
    var userID = req.body.userID;
    console.log(userID);
    mysql.connect((db)=>{
        var whereObj = {
            userID:userID
        };
        //获取从前端传回来的数据
        var updateData = req.body;
        mysql.updateOne(db,'users',whereObj,updateData,(result)=>{
            res.redirect('/users?limitNum=4&pageCode=0');
            db.close();
        })
    })
});
//删除用户
router.get('/deleteUser', function(req, res, next) {
    // 根据nameID查询要删除的user
    var userID = url.parse(req.url,true).query.userID;
    mysql.connect((db)=>{
        var deleteObj = {
            userID:userID
        }
        mysql.deleteOne(db,'users',deleteObj,(result)=>{
            res.redirect('/users?limitNum=4&pageCode=0');
            db.close();
        })
    })
});

//跳转首页
router.post('/loginAction',(req,res,next)=>{
    var obj = req.body;
    // console.log(obj);
    mysql.connect((db)=>{
        var queryObj = obj;
        var showObj = {};
        mysql.find(db,'users',queryObj,showObj,(result)=>{
            // console.log(result);
            if(result.length > 0){
                //跳转首页
                res.cookie('login',1);//存cookie
                res.redirect('/');//跳转首页
            }else{
                res.render('login',{title:'听风少年-登录',errInfo:'用户名或密码错误'});
            }
        })
    })
});
router.get("/logout",(req,res,next)=>{
    res.clearCookie('isLogin');
    res.redirect("/");
})


router.get('/getCode', function(req, res, next) {
  /**
   * 每一个手机号一天最多能发送5条短信
   * 每一个IP地址一天最多能发送5条消息
   * 在某一段时间内，发送短信的内容是一致的----短信验证码的有效时间
   */
  // res.send('respond with a resource');
  var phonenum = url.parse(req.url, true).query.phonenum;
  var code = "";
  function getRandomCode(){
    //产生随机数的方法体
    // code = "12345"
    // return code
    for(var i = 0;i<5;i++){
        var a = Math.floor(Math.random()*10+1);
        code+=a;
    }
    return code;
  }
  mycode.sendCode({
    PhoneNumbers: phonenum,
    code: getRandomCode(),
    success:function(){
      res.send(code) //发送成功
    }
  })
});

router.get('/getName', function(req, res, next) {
    //一进入列表页面就分页
        var pageCode = url.parse(req.url, true).query.pageCode * 1;
        var limitNum = url.parse(req.url, true).query.limitNum * 1;
        mysql.connect(function(db){
            var queryObj = {};
            var showObj = {_id:0};
            var skipNum = pageCode * limitNum;
        mysql.find(db, 'user', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'user', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-用户",
                    activeIndex: 2,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                console.log(obj.totalPage);
                // res.render('users', obj);
                res.send(result);
                db.close();
            })
        })
    })
});

module.exports = router;
