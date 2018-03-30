var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var fs = require('fs');
var multer = require('multer');//中间件
var upload = multer({dest:'uploads/'});


/* GET users listing. */

//跳转商品页面
router.get('/', function(req, res, next) {
    //一进入列表页面就分页
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'product', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'product', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-商品列表",
                    activeIndex: 3,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                // console.log(obj.result);
                res.render('product', obj);
                db.close();
            })
        })
    })
});

//跳转添加商品页面
router.get('/addProduct', function(req, res, next) {
    res.render('addProduct',{title:'听风少年-添加用户',activeIndex:3,tip:'商品已存在'})
});


//添加商品详细信息数据
router.post('/addProductAction',upload.single('productImages'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var productID = obj.productID;
    var productLink = obj.productLink;
    var productName = obj.productName;
    var productPrice = obj.productPrice;
    var description = obj.description;
    /**
     {
         fieldname: 'bannerImg',
         originalname: '1.bmp',
         encoding: '7bit',
         mimetype: 'image/bmp',
         destination: 'uploads/',
         filename: '522d3640eda0dfa916fe4551903026e3',
         path: '\\uploads\\522d3640eda0dfa916fe4551903026e3',
         size: 2389736
     }
     */
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var productImages = "http://localhost:3000/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{

        var insertData = {
            productID:productID,
            productName:productName,
            productPrice:productPrice,
            productImages:productImages,
            productLink:productLink,
            description:description
        }
        fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.insert(db,'product',insertData,(result)=>{
                res.redirect('/product?limitNum=4&pageCode=0');
                db.close();
            })
        })
    })

});
//跳转更新产品页面
router.get('/updateProduct', function(req, res, next) {
    // 根据nameID查询user
    var productID = url.parse(req.url,true).query.productID;
    console.log("----------------------");
    console.log(productID);
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
            productID:productID
        };
        var showObj = {};
        mysql.find(db,'product',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新商品',
                activeIndex:3,
                result:result
            }
            res.render('updateProduct',obj);
            db.close();
        })
    })
});
//更新商品页面
router.post('/updateProductAction', function(req, res, next) {
    // 通过nameID来获取用户的详细信息
    var productID = req.body.productID;
    // console.log(productID);
    mysql.connect((db)=>{
        var whereObj = {
            productID:productID
        };
        //获取从前端传回来的数据
        var updateData = req.body;
        mysql.updateOne(db,'product',whereObj,updateData,(result)=>{
            res.redirect('/product?limitNum=4&pageCode=0');
            db.close();
        })
    })
});
//删除用户
router.get('/deleteProduct', function(req, res, next) {
    // 根据nameID查询要删除的user
    var productID = url.parse(req.url,true).query.productID;
    mysql.connect((db)=>{
        var deleteObj = {
            productID:productID
        }
        mysql.deleteOne(db,'product',deleteObj,(result)=>{
            res.redirect('/product?limitNum=4&pageCode=0');
            db.close();
        })
    })
});


module.exports = router;
