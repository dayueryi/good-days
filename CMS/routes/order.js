var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('./tool/mysql');
/* GET home page. */

//跳转订单页面
router.get('/', function(req, res, next) {
    //一进入列表页面就分页
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'order', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'order', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-订单",
                    activeIndex: 1,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                console.log(obj.totalPage);
                res.render('order', obj);
                db.close();
            })
        })
    })
});
//跳转添加订单页面
router.get('/addOrder', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('addOrder',{title:'听风少年-添加订单',activeIndex:1})
});
//添加订单详细信息数据
router.post('/addOrderAction', function(req, res, next) {
    // res.send('respond with a resource');
    var orderID = req.body.orderID;
    mysql.connect((db)=>{
        var queryObj = {orderID:orderID};
        var showObj = {};
        mysql.find(db,'order',queryObj,showObj,(resultAll)=>{
            if(resultAll.length > 0){
                res.render('addOrder',{title:'听风少年-添加订单',activeIndex:1,tip:'订单已存在'})
            }else{
                var insertData = req.body;
                mysql.insert(db,'order',insertData,(result)=>{
                    res.redirect('/order?limitNum=4&pageCode=0');
                    db.close();
                })
            }
        })
    })

});
//跳转编辑订单页面
router.get('/updateOrder', function(req, res, next) {
    // 根据nameID查询user
    var orderID = url.parse(req.url,true).query.orderID;
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
            orderID:orderID
            // ObjectId:ObjectId(ObjectId)
        };
        var showObj = {};
        mysql.find(db,'order',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-编辑订单',
                activeIndex:1,
                result:result
            }
            res.render('updateOrder',obj);
            db.close();
        })
    })
});
//编辑订单页面
router.post('/updateOrderAction', function(req, res, next) {
    // 通过nameID来获取用户的详细信息
    var orderID = req.body.orderID;
    console.log(orderID);
    mysql.connect((db)=>{
        var whereObj = {
            orderID:orderID
        };
        //获取从前端传回来的数据
        var updateData = req.body;
        mysql.updateOne(db,'order',whereObj,updateData,(result)=>{
            res.redirect('/order?limitNum=4&pageCode=0');
            db.close();
        })
    })
});
//删除列表
router.get('/deleteOrder', function(req, res, next) {
    // 根据nameID查询要删除的user
    var orderID = url.parse(req.url,true).query.orderID;
    mysql.connect((db)=>{
        var deleteObj = {
            orderID:orderID
        }
        mysql.deleteOne(db,'order',deleteObj,(result)=>{
            res.redirect('/order?limitNum=4&pageCode=0');
            db.close();
        })
    })
});


module.exports = router;
