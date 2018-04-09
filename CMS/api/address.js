var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var async = require('async');
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
                res.render('address', obj);
                // res.send(result);
                db.close();
            })
        })
    })
});

//跳转添加用户页面
router.get('/addAddress', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('addAddress',{title:'听风少年-添加用户',activeIndex:0})
});

//添加用户详细信息数据
router.post('/addAddressAction', function(req, res, next) {
    // res.send('respond with a resource');
    var userID = req.body.userID;
    mysql.connect((db)=>{
        var queryObj = {addressID:addressID};
        var showObj = {};
        mysql.find(db,'address',queryObj,showObj,(resultAll)=>{
            if(resultAll.length > 0){
                res.render('addAddress',{title:'听风少年-添加用户',activeIndex:0,tip:'用户已存在'})
            }else{
                var insertData = req.body;
                mysql.insert(db,'address',insertData,(result)=>{
                    res.redirect('/address?limitNum=4&pageCode=0');
                    db.close();
                })
            }
        })
    })

});
//跳转更新用户页面
router.get('/updateAddress', function(req, res, next) {
    // 根据nameID查询user
    var addressID = url.parse(req.url,true).query.addressID;
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
            addressID:addressID
            // ObjectId:ObjectId(ObjectId)
        };
        var showObj = {};
        mysql.find(db,'address',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新用户',
                activeIndex:2,
                result:result
            }
            res.render('updateAddress',obj);
            db.close();
        })
    })
});
//更新用户页面
router.post('/updateAddressAction', function(req, res, next) {
    // 通过nameID来获取用户的详细信息
    var addressID = req.body.addressID;
    // console.log(userID);
    mysql.connect((db)=>{
        var whereObj = {
            addressID:addressID
        };
        //获取从前端传回来的数据
        var updateData = req.body;
        mysql.updateOne(db,'address',whereObj,updateData,(result)=>{
            res.redirect('/address?limitNum=4&pageCode=0');
            db.close();
        })
    })
});
//删除用户
router.get('/deleteAddress', function(req, res, next) {
    // 根据nameID查询要删除的user
    var addressID = url.parse(req.url,true).query.addressID;
    mysql.connect((db)=>{
        var deleteObj = {
            addressID:addressID
        }
        mysql.deleteOne(db,'address',deleteObj,(result)=>{
            res.redirect('/address?limitNum=4&pageCode=0');
            db.close();
        })
    })
});
// router.get('/samllnav', function(req, res, next) {
//         mysql.connect(function(db){
//             var queryObj = {};
//             var showObj = {_id:0};
//         mysql.find(db, 'samllnav', queryObj, showObj, function(result) {
//                 var obj = {
//                     title: "听风少年-用户",
//                     activeIndex: 0,
//                     tip: '',
//                     result: result,
//                 }
//                 res.send(result);
//                 db.close();
//             })
//         })
//     });



//跳转首页
/* router.post('/loginAction',(req,res,next)=>{
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
}); */



   

router.get('/searchapi', function(req, res, next) {
    console.log("接口")
    var type = url.parse(req.url, true).query.type;
        // var subjectKind = url.parse(req.url, true).query.subjectKind;
        // var subjectKindName = url.parse(req.url, true).query.subjectKindName;
        // var subjectStyle = url.parse(req.url, true).query.subjectStyle;
        // var subjectAddress = url.parse(req.url, true).query.subjectAddress;
      
    mysql.connect((db)=>{
        var option=[
            function(cb){
                mysql.find(db,"search",{subjectKindName:type},{_id:0},(result)=>{
                    cb(null,result)
                })
            },
            function(cb){
                mysql.find(db,"search",{subjectStyle:type},{_id:0},(result)=>{
                    cb(null,result)
                })
            },
            function(cb){
                mysql.find(db,"search",{subjectAddress:type},{_id:0},(result)=>{
                    cb(null,result)
                   
                })
            }
        ];
        async.parallel(option,(err,result)=>{
            db.close()
            var arr = [...result[0],...result[1],...result[2]]
          //  console.log(arr,"肯定bug")
            res.send(arr)
        })
        //  if(subjectKindName){
        //         var queryObj = {
        //             subjectKindName:subjectKindName
        //         }
        //     }else if(subjectStyle){
        //         var queryObj = {
        //             subjectStyle:subjectStyle
        //         }
        //     }else if(subjectAddress){
        //         var queryObj = {
        //             subjectAddress:subjectAddress
        //         }
        //     }else{
        //         var queryObj = {};
        //     }

        // console.log(queryObj,"------------")
        // var showObj = {};
        // mysql.find(db,'search',queryObj,showObj,(result)=>{
        //    res.send(result);    
        //     db.close();
        // })
    })
});

module.exports = router;
