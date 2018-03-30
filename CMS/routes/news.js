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
   
    var pageCode = url.parse(req.url, true).query.pageCode * 1;
    var limitNum = url.parse(req.url, true).query.limitNum * 1;
    mysql.connect(function(db){
        var queryObj = {};
        var showObj = {
            
        };
        var skipNum = pageCode * limitNum;
        mysql.find(db, 'news', queryObj, showObj, function(resultAll) {
            mysql.findFenye(db, 'news', queryObj, showObj, limitNum, skipNum, pageCode, function(result) {
                var totalPage = Math.ceil(resultAll.length / limitNum);//总页数
                var obj = {
                    title: "听风少年-news",
                    activeIndex:5,
                    tip: '',
                    result: result,
                    pageCode: pageCode,
                    totalPage: totalPage
                } 
                // console.log(obj.totalPage);
                res.render('news', obj);
                db.close();
            })
        })
    })
});

//跳转添加新闻页面
router.get('/addNews', function(req, res, next) {
    
    res.render('addNews',{title:'听风少年-添加用户',activeIndex:5})
});

//添加新闻详细信息数据
router.post("/addNewsAction", upload.array('newsImages'), (req, res, next) => {
    //console.log(req.files)
    var obj = req.body
    var img = {}
    var option = []
console.log("---------")
    for (let i = 0; i < req.files.length; i++) {
        option[i] = function (cb) {
            var type = req.files[i].mimetype.split("/")[1]
            fs.rename("uploads/" + req.files[i].filename, "uploads/" + req.files[i].filename + "." + type, (err) => {
                if (err) throw err
                img["newsImages" + i] = "http://localhost:3000/" + req.files[i].filename + "." + type
                cb(null,obj)
            })
        }
    }
    async.parallel(option,(err,data)=>{
       // console.log(data)
      //  console.log("-----------------------------")
       var insertDate = {
           newsID:obj.newsID,
           newsName:obj.newsName,
           newsLinkSrc:obj.newsLinkSrc,
           newsContent:obj.newsContent
       }
       insertDate.img = img
      //  console.log(obj)
        mysql.connect((db)=>{
            mysql.insert(db,"news",insertDate,(result)=>{
                console.log('---------------',result)
                console.log('================',result.ops.newsID)
                db.close()
                res.redirect("/news?pageCode=0&limitNum=4")
            })
        })
    })
  
})
//跳转更新用户页面
 router.get('/updateNews', function(req, res, next) {
    // 根据nameID查询user
    var newsID = url.parse(req.url,true).query.newsID;

    mysql.connect((db)=>{
        var queryObj = {
            newsID:newsID
          
        };
        var showObj = {};
        mysql.find(db,'news',queryObj,showObj,(result)=>{
            var obj = {
                title:'听风少年-更新用户',
                activeIndex:2,
                result:result
            }
            res.render('updateNews',obj);
            db.close();
        })
    })
}); 
//更新用户页面
 router.post('/updateNewsAction', function(req, res, next) {
    // 通过nameID来获取用户的详细信息
    var newsID = req.body.newsID;
    // console.log(userID);
    mysql.connect((db)=>{
        var whereObj = {
            newsID:newsID
        };
        //获取从前端传回来的数据
        var updateData = req.body;
        // updateData.newsContent = newsContent;
        mysql.updateOne(db,'news',whereObj,updateData,(result)=>{
            res.redirect('/news?limitNum=4&pageCode=0');
            console.log("111111111111111111111111111111111111");
            // res.send('<script><alert>更新成功</alert>window.location.href="/news?limitNum=4&pageCode=0"</script>');
            db.close();
        })
    })
}); 
//删除用户
 router.get('/deleteNews', function(req, res, next) {
    // 根据nameID查询要删除的user
    var newsID = url.parse(req.url,true).query.newsID;
    mysql.connect((db)=>{
        var deleteObj = {
            newsID:newsID
        }
        mysql.deleteOne(db,'news',deleteObj,(result)=>{
            res.redirect('/news?limitNum=4&pageCode=0');
            db.close();
        })
    })
});

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
});
 */
module.exports = router;
