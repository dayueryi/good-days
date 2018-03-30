var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql');
var url = require('url');
var multer = require('multer');//引入中间件
var uploadBanner = multer({dest:'pcuploads/banner'});
var upload = multer({dest:'uploads/'});//上传文件到uploads
var fs = require('fs');//引入文件模块

/* GET home page. */
router.get('/', function(req, res, next) {
/*============================ 跳转登录页面=======================*/
  
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

/*===========================查询---跳转nav导航============================*/
router.get('/nav', function(req, res, next) {
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'nav', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'nav', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-nav",
                    activeIndex: 0,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                } 
                // console.log(obj.totalPage);
                res.render('nav', obj);
                db.close();
            })
        })
    })
});
/*================================跳转添加nav页面===================*/
router.get('/addNav', function(req, res, next) {
    res.render('addNav',{title:'听风少年-nav导航',activeIndex:0})
});
/*=============================添加nav数据========================*/
router.post('/addNavAction', function(req, res, next) {
    var insertData = req.body;
    mysql.connect((db)=>{
        var queryObj = {navID:insertData.navID};
        var showObj = {};
        mysql.find(db,'nav',queryObj,showObj,(result)=>{
            if(result.length != 0){
                res.render('addNav',{title:'听风少年-添加nav',activeIndex:0,tip:'该nav项已经存在、已添加'})

            }else{
                mysql.insert(db,'nav',insertData,(result)=>{

                        
                    res.send("<script>alert('添加成功');location.href='/nav?limitNum=4&pageCode=0'</script>")
                    db.close();
                    // var queryObj = {};
                    // var showObj = {};
                    // mysql.find(db,'nav',queryObj,showObj,(result)=>{
                    //
                    //     res.send(result)
                    //     // res.render('nav',{title:'听风少年-nav导航',activeIndex:0,result:result})
                    //     db.close();
                    // })

                })
            }
        })
    })
})
;
/*=============================跳转编辑nav页面=====================*/
router.get('/updateNav', function(req, res, next) {
    var navID = url.parse(req.url,true).query.navID;
    mysql.connect((db)=>{

        var queryObj = {
         navID:navID
         }
        var showObj = {};
        // console.log(queryObj)
        mysql.find(db,'nav',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-nav导航',
                activeIndex:0,
                result:result
            }
            res.render('updateNav',obj)
        })
    })

});
/*=================================编辑nav数据===========================*/
router.post('/updateNavAction', function(req, res, next) {
    var navID = req.body.navID;
    mysql.connect((db)=>{
        var whereObj = {
            navID:navID
        };
        var updateObj = req.body;
        // console.log(updateObj);
       mysql.updateOne(db,'nav',whereObj,updateObj,(result)=>{
            res.redirect('/nav?limitNum=4&pageCode=0');
            db.close();
       })
    })
});
/*==============================删除用户======================*/
router.get('/deleteNav', function(req, res, next) {
    // 根据nameID查询要删除的user
    var navID = url.parse(req.url,true).query.navID;
    mysql.connect((db)=>{
        var deleteObj = {
            navID:navID
        }
        mysql.deleteOne(db,'nav',deleteObj,(result)=>{
            res.redirect('/nav?limitNum=4&pageCode=0');
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
 } */

/*==============================查询---跳转banner导航====================*/
router.get('/banner', function(req, res, next) {
    //一进入列表页面就分页
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'banner', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'banner', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-轮播列表",
                    activeIndex: 0,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                }
                // console.log(obj.result);
                res.render('banner', obj);
               
                db.close();
            })
        })
    })
});

/*======================跳转添加banner页面===========================*/
router.get('/addBanner', function(req, res, next) {
    res.render('addBanner',{title:'听风少年-导航',activeIndex:0})
});
/*======================添加banner数据=======================*/
router.post('/addBannerAction',uploadBanner.single('bannerImages'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var bannerID = obj.bannerID;
   
    var bannerName = obj.bannerName;
    var bannerLinkSrc = obj.bannerLinkSrc;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var bannerImages = "http://localhost:4000/banner/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{

        var insertData = {
            bannerID:bannerID,
       
            bannerName:bannerName,
            bannerImages:bannerImages,
            bannerLinkSrc:bannerLinkSrc
        }
        fs.rename('pcuploads/banner/'+filename,'pcuploads/banner/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.insert(db,'banner',insertData,(result)=>{
                // res.redirect('/banner?limitNum=4&pageCode=0');
                res.send('<script>alert("添加成功");window.location.href="/banner?limitNum=4&pageCode=0"</script>')
                db.close();
            })
        })
    })
});
/*==============================跳转更新banner页面==========================*/
router.get('/updateBanner', function(req, res, next) {
    var bannerID = url.parse(req.url,true).query.bannerID;
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
            bannerID:bannerID
            // ObjectId:ObjectId(ObjectId)
        };
        var showObj = {};
        // console.log(bannerID);
        mysql.find(db,'banner',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新banner',
                activeIndex:0,
                result:result
            }
            // console.log(obj);
            res.render('updateBanner',obj);
            db.close();
        })
    })
});
/*=========================更新banner页面==========================*/
router.post('/updateBannerAction',uploadBanner.single('bannerImages'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var bannerID = obj.bannerID;

    var bannerName = obj.bannerName;
    var bannerLinkSrc = obj.bannerLinkSrc;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var bannerImages = "http://localhost:4000/banner/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{
        var whereObj = {
            bannerID:bannerID,
          
        };
        var updateData = {
            bannerID:bannerID,
         
            bannerName:bannerName,
            bannerLinkSrc:bannerLinkSrc,
            bannerImages:bannerImages
        };
        mysql.find(db, "banner", whereObj, {}, (resultAll) => {
            var str = resultAll[0].bannerImages.split("/")[4]
            mysql.updateOne(db, "banner", whereObj, updateData, (result) => {
      
              fs.rename("pcuploads/banner/" + req.file.filename, "pcuploads/banner/" + req.file.filename + "." + type, (err) => {
                if (err) throw err
                db.close()
                res.send('<script>alert("修改成功");window.location.href="/banner?limitNum=4&pageCode=0"</script>')
              })
              fs.unlink("pcuploads/banner/" + str, (err) => {
                if (err) throw err
                    console.log(str,"---+++")
              })
            
      
      
            })
          })
        
        /* xqq原版
        fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.updateOne(db,'banner',whereObj,updateData,(result)=>{
                // res.redirect('/banner?limitNum=4&pageCode=0');
                res.send('<script>alert("修改成功");window.location.href="/banner?limitNum=4&pageCode=0"</script>')
                db.close();
            })
        }) */
    })
});
/*==============================删除banner======================*/
router.get('/deleteBanner', function(req, res, next) {
    // 根据nameID查询要删除的user
    var bannerID = url.parse(req.url,true).query.bannerID;
    mysql.connect((db)=>{
        var deleteObj = {
            bannerID:bannerID
        }

        mysql.find(db, "banner", deleteObj, {}, (resultAll) => {
            mysql.deleteOne(db, "banner", deleteObj, (result) => {
              db.close()
              res.redirect('/banner?limitNum=4&pageCode=0');
              var str = resultAll[0].bannerImages.split("/")[4]
        
              fs.unlink("pcuploads/banner/" + str, (err) => {
                  console.log(str)
                if (err) throw err
      
              })
            })
      
          })
       /*谢庆庆版 
        mysql.deleteOne(db,'banner',deleteObj,(result)=>{
            res.redirect('/banner?limitNum=4&pageCode=0');
            db.close();
        }) */
    })
});


/*===============================跳转模板页面=========================*/

router.get('/template', function(req, res, next) {
   
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {};
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'template', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'template', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-template",
                    activeIndex: 0,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                } 

                // console.log(obj.totalPage);
                res.render('template', obj);
                db.close();
            })
        })
    })
});
/*===============================跳转添加模板页面=========================*/

router.get('/addTemplate', function(req, res, next) {
    res.render('addTemplate',{title:'听风少年-导航',activeIndex:0})
});
/*======================添加template数据=======================*/
router.post('/addTemplateAction',upload.single('templateImages'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var templateID = obj.templateID;
    var templateStyle = obj.templateStyle;
    var addressID = obj.addressID;
    var addressType = obj.addressType;
    var userID = obj.userID;
    var templateName = obj.templateName;
    var templateLinkSrc = obj.templateLinkSrc;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var templateImages = "http://localhost:3000/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{

        var insertData = {
            templateID:templateID,
            templateStyle:templateStyle,
            addressID:addressID,
            addressType:addressType,
            userID:userID,
            templateName:templateName,
            templateImages:templateImages,
            templateLinkSrc:templateLinkSrc
        }
        fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.insert(db,'template',insertData,(result)=>{
                // res.redirect('/banner?limitNum=4&pageCode=0');
                res.send('<script>alert("添加成功");window.location.href="/template?limitNum=5&pageCode=0"</script>')
                db.close();
            })
        })
    })
});
/*==============================跳转更新template页面==========================*/
router.get('/updateTemplate', function(req, res, next) {
//  var templateID = url.parse(req.url,true).query.templateID;
    var addressID = url.parse(req.url,true).query.addressID;
    // var ObjectId = url.parse(req.url,true).query.ObjectId;
    mysql.connect((db)=>{
        var queryObj = {
//          templateID:templateID,
    addressID:addressID 
            // ObjectId:ObjectId(ObjectId)
        };
        var showObj = {};
        // console.log(bannerID);
        mysql.find(db,'template',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新banner',
                activeIndex:0,
                result:result
            }
               console.log(result);
            res.render('updateTemplate',obj);
            db.close();
        })
    })
});
/*=========================更新template页面==========================*/
router.post('/updateTemplateAction',upload.single('templateImages'), function(req, res, next) {
    var obj = req.body;
     console.log("888888888888888888888");
   	var templateID = obj.templateID;
    var templateStyle = obj.templateStyle;
    var addressID = obj.addressID;
    var addressType = obj.addressType;
    var userID = obj.userID;
    var templateName = obj.templateName;
    var templateLinkSrc = obj.templateLinkSrc;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var templateImages = "http://localhost:3000/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{
        var whereObj = {
//          templateID:templateID,
addressID:addressID
        };
        var updateData = {
            templateID:templateID,
            templateStyle:templateStyle,
            addressID:addressID,
            addressType:addressType,
            userID:userID,
            templateName:templateName,
            templateImages:templateImages,
            templateLinkSrc:templateLinkSrc
        };
        fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.updateOne(db,'template',whereObj,updateData,(result)=>{
                // res.redirect('/banner?limitNum=4&pageCode=0');
                console.log("------------------------"+result);
                res.send('<script>alert("修改成功");window.location.href="/template?limitNum=5&pageCode=0"</script>')
                db.close();
            })
        })
    })
});
/*==============================删除template======================*/
router.get('/deleteTemplate', function(req, res, next) {
    // 根据nameID查询要删除的user
    var templateID = url.parse(req.url,true).query.templateID;
    mysql.connect((db)=>{
        var deleteObj = {
            templateID:templateID
        }
        mysql.deleteOne(db,'template',deleteObj,(result)=>{
            res.redirect('/template?limitNum=5&pageCode=0');
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

                // console.log(obj.totalPage);
                res.render('active', obj);
                db.close();
            })
        })
    })
});
/*===============================跳转添加模板页面=========================*/

router.get('/addActive', function(req, res, next) {
    res.render('addActive',{title:'听风少年-导航',activeIndex:4})
});
/*======================添加active数据=======================*/
router.post('/addActiveAction',upload.single('activeImages'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var activeID = obj.activeID;
    var activeTime = obj.activeTime;
    var activeName = obj.activeName;
    var activeAddress = obj.activeAddress;
    var activeLinkSrc = obj.activeLinkSrc;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var activeImages = "http://localhost:3000/" + filename+"."+type;//图片路径
    mysql.connect((db)=>{

        var insertData = {
            activeID:activeID,
            activeTime:activeTime,
            activeAddress:activeAddress,
            activeName:activeName,
            activeLinkSrc:activeLinkSrc,
            activeImages:activeImages
            
        }
        fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
            if(err) throw  err;
            mysql.insert(db,'active',insertData,(result)=>{
                // res.redirect('/banner?limitNum=4&pageCode=0');
                res.send('<script>alert("添加成功");window.location.href="/active?limitNum=4&pageCode=0"</script>')
                db.close();
            })
        })
    })
});
/*==============================跳转更新active页面==========================*/
router.get('/updateActive', function(req, res, next) {
     var activeID = url.parse(req.url,true).query.activeID;
        // var addressID = url.parse(req.url,true).query.addressID;
        mysql.connect((db)=>{
            var queryObj = {
    //          templateID:templateID,
                activeID:activeID 
            };
            var showObj = {};
            mysql.find(db,'active',queryObj,showObj,(result)=>{
                var obj = {
                    title:'听风少年-active',
                    activeIndex:4,
                    result:result
                }
                   console.log(result);
                res.render('updateActive',obj);
                db.close();
            })
        })
    });
    /*=========================更新template页面==========================*/
    router.post('/updateActiveAction',upload.single('activeImages'), function(req, res, next) {
        var obj = req.body;
         console.log("888888888888888888888");
         var activeID = obj.activeID;
         var activeTime = obj.activeTime;
         var activeName = obj.activeName;
         var activeAddress = obj.activeAddress;
         var activeLinkSrc = obj.activeLinkSrc;
         var filename = req.file.filename;
         var type = req.file.mimetype.split('/')[1];//图片类型
         var activeImages = "http://localhost:3000/" + filename+"."+type;//图片路径
        mysql.connect((db)=>{
            var whereObj = {
                activeID:activeID
            };
            var updateData = {
                activeID:activeID,
                activeTime:activeTime,
                activeAddress:activeAddress,
                activeName:activeName,
                activeLinkSrc:activeLinkSrc,
                activeImages:activeImages
            };
            fs.rename('uploads/'+filename,'uploads/'+filename+'.'+type,(err,result)=>{
                if(err) throw  err;
                mysql.updateOne(db,'active',whereObj,updateData,(result)=>{
                    // res.redirect('/banner?limitNum=4&pageCode=0');
                    console.log("------------------------"+result);
                    res.send('<script>alert("修改成功");window.location.href="/active?limitNum=4&pageCode=0"</script>')
                    db.close();
                })
            })
        })
    });
    /*==============================删除template======================*/
    router.get('/deleteActive', function(req, res, next) {
        // 根据nameID查询要删除的user
        var activeID = url.parse(req.url,true).query.activeID;
        mysql.connect((db)=>{
            var deleteObj = {
                activeID:activeID
            }
            mysql.deleteOne(db,'active',deleteObj,(result)=>{
                res.redirect('/active?limitNum=4&pageCode=0');
                db.close();
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
                res.render('address', obj);
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
    var addressID = req.body.addressID;
    mysql.connect((db)=>{
        var queryObj = {addressID:addressID};
        var showObj = {};
        mysql.find(db,'address',queryObj,showObj,(resultAll)=>{
            if(resultAll.length > 0){
                res.render('address',{title:'听风少年-添加用户',activeIndex:0,tip:'用户已存在'})
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
module.exports = router;
